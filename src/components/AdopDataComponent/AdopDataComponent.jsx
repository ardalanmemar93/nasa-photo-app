import React, { useState } from 'react';
import axios from 'axios';

export default function ApodDataComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchData = async () => {
    try {
      if (!API_KEY) {
        console.error('API key is undefined. Make sure to set REACT_APP_API_KEY in your environment variables.');
        return;
      }

      setLoading(true);

      // Fetch data from NASA API
      const nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: API_KEY,
        },
      });

      // Save the data to MongoDB
      await axios.post('/api/apod', {
        title: nasaResponse.data.title,
        explanation: nasaResponse.data.explanation,
        date: nasaResponse.data.date,
        imageUrl: nasaResponse.data.hdurl || nasaResponse.data.url,
      });

      // Set the data from NASA API
      setApiData(nasaResponse.data);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error (network error, timeout, etc.)
        console.error('Axios error:', error.message);
        setError('Error fetching data from NASA API');
      } else {
        // Other types of errors
        console.error('Error fetching APOD data:', error);
        setError('Unexpected error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-8">
      <button
        onClick={fetchData}
        className={`bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Daily Content'}
      </button>
      <div>
        {apiData ? (
          <div>
            <p className="text-base mb-2 mt-2">Title: {apiData.title}</p>
            <p className="text-base mb-2">Explanation: {apiData.explanation}</p>
            <p className="text-base mb-2">Date: {apiData.date}</p>
            <img
              src={apiData.hdurl || apiData.url}
              alt="APOD"
              className="mt-4 rounded-md shadow-md"
            />
          </div>
        ) : (
          <p className="text-base mt-4">{loading ? 'Fetching data...' : error || 'Nothing yet.'}</p>
        )}
      </div>
    </div>
  );
}
