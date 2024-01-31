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
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        <h2>Data:</h2>
        {Array.isArray(apodData) && apodData.length > 0 ? (
          <div>
            <p>Title: {apodData[0].title}</p>
            <p>Explanation: {apodData[0].explanation}</p>
            <p>Date: {apodData[0].date}</p>
            <img src={apodData[0].imageUrl} alt="APOD" />
          </div>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </div>
    </div>
  );
}
