// routes/api/apodData.js
const express = require('express');
const router = express.Router();
const apodController = require('../../controllers/api/apodData');

// GET /api/apod (Fetch data from MongoDB)
router.get('/', apodController.getApodData);

// POST /api/apod (Fetch data from NASA API and save to MongoDB)
router.post('/', apodController.fetchAndSaveApodData);

module.exports = router;


