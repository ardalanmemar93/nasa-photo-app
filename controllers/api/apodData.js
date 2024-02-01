// controllers/apodController.js
const axios = require('axios');
const Apod = require('../../models/apodData');

const getApodData = async (req, res) => {
  try {
    const apodData = await Apod.find();
    res.json(apodData);
  } catch (error) {
    console.error('Error fetching APOD data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchAndSaveApodData = async (req, res) => {
  try {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const config = {
      method: 'get',
      url: 'https://api.nasa.gov/planetary/apod',
      params: {
        api_key: API_KEY,
        date: req.query.date || '',
        concept_tags: req.query.concept_tags || false,
        hd: req.query.hd || false,
        count: req.query.count || '',
        start_date: req.query.start_date || '',
        end_date: req.query.end_date || '',
        thumbs: req.query.thumbs || false,
      },
    };

    const response = await axios.request(config);
    const apodData = response.data;

    // Save the data to MongoDB
    const newApod = new Apod({
      title: apodData.title,
      explanation: apodData.explanation,
      date: apodData.date,
      imageUrl: apodData.hdurl || apodData.url,
    });

    await newApod.save();
    res.json({ message: 'ApodData saved to MongoDB', apodData });
  } catch (error) {
    console.error('Error fetching and saving APOD data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getApodData,
  fetchAndSaveApodData,
};
