//AdopDataComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function ApodDataComponent() {
    const [apodData, setApodData] = useState(null);
  
    const fetchData = async () => {
      try {
        // Fetch data from NASA API
        const nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: '6UW6loMHB1O57I5LARj9u0j4x2YjU6WBPEOqNFiY', 
          },
        });
  
        // Check if the data already exists in the database
        const existingData = await axios.get('/api/apod', {
          params: {
            date: nasaResponse.data.date,
          },
        });
  
        if (existingData.data.length === 0) {
          // Save the data to MongoDB only if it doesn't exist
          await axios.post('/api/apod', {
            title: nasaResponse.data.title,
            explanation: nasaResponse.data.explanation,
            date: nasaResponse.data.date,
            imageUrl: nasaResponse.data.hdurl || nasaResponse.data.url,
          });
        }
  
        // Fetch data from your database
        const dbResponse = await axios.get('/api/apod'); 
  
        setApodData(dbResponse.data[0]); 
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };
  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-8">
      <button
        onClick={fetchData}
        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Fetch Data
      </button>
      <div>
        {apodData ? (
          <div>
            <p className="text-base mb-2">Title: {apodData.title}</p>
            <p className="text-base mb-2">Explanation: {apodData.explanation}</p>
            <p className="text-base mb-2">Date: {apodData.date}</p>
            <img
              src={apodData.imageUrl}
              alt="APOD"
              className="mt-4 rounded-md shadow-md"
            />
          </div>
        ) : (
          <p className="text-base">No data fetched yet.</p>
        )}
      </div>
    </div>
  );
}
