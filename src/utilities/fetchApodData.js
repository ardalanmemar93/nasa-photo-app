const axios = require('axios');
const mongoose = require('mongoose');
const Apod = require('../../models/apodData');

const API_KEY = '6UW6loMHB1O57I5LARj9u0j4x2YjU6WBPEOqNFiY';

const config = {
  method: 'get',
  url: 'https://api.nasa.gov/planetary/apod',
  params: {
    api_key: API_KEY,
  },
};

axios
  .request(config)
  .then((response) => {
    const apodData = response.data;

    // Save the data to MongoDB
    const newApod = {
      title: apodData.title,
      explanation: apodData.explanation,
      date: apodData.date,
      imageUrl: apodData.hdurl || apodData.url,
    };

    // Set up a timeout for the save operation
    const saveTimeout = setTimeout(() => {
      console.error('Error: Save operation timed out.');
      process.exit(1); // Exit the script on timeout
    }, 50000); 

    // Save data to MongoDB using insertMany for batch insertion
    Apod.insertMany([newApod])
      .then(() => {
        clearTimeout(saveTimeout); // Clear the timeout on successful save
        console.log('ApodData saved to MongoDB');
        process.exit(0); // Exit the script on successful save
      })
      .catch((saveError) => {
        clearTimeout(saveTimeout); // Clear the timeout on error
        console.error('Error saving ApodData to MongoDB:', saveError);
        process.exit(1); // Exit the script on save error
      });

    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.error('Error fetching APOD data:', error);
    process.exit(1); // Exit the script on fetch error
  });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nasa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongooseConnection = mongoose.connection;

mongooseConnection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongooseConnection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

mongooseConnection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongooseConnection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});
