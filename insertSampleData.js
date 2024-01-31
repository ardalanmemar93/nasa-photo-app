const mongoose = require('mongoose');
const Apod = require('./models/apodData');

mongoose.connect('mongodb://localhost:27017/nasa', { useNewUrlParser: true, useUnifiedTopology: true });

const sampleData = [
  {
    title: 'Sample Title',
    explanation: 'Sample Explanation',
    date: '2024-01-30',
    imageUrl: 'https://example.com/sample-image.jpg',
  },
  // Add more sample data as needed
];

Apod.insertMany(sampleData)
  .then(() => {
    console.log('Sample data inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting sample data:', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
