import React, { useState } from 'react';
import axios from 'axios';

export default function AdopDataComponent() {
  const [apodData, setApodData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/apod');
      setApodData(response.data);
    } catch (error) {
      console.error('Error fetching APOD data:', error);
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-8">
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Fetch Data
      </button>
      <div>
        {Array.isArray(apodData) && apodData.length > 0 ? (
          <div>
            <p className="text-base mb-2">Title: {apodData[0].title}</p>
            <p className="text-base mb-2">Explanation: {apodData[0].explanation}</p>
            <p className="text-base mb-2">Date: {apodData[0].date}</p>
            <img
              src={apodData[0].imageUrl}
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
