//NewContentPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdopDataComponent from '../../components/AdopDataComponent/AdopDataComponent';

const NewContentPage = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    // Function to fetch APOD data
    const fetchApodData = async () => {
      try {
        const response = await axios.get('/api/apod');
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    // Call the function to fetch data
    fetchApodData();
  }, []); 

  return (
    <div className="NewContentPage">
      {apodData ? (
        <AdopDataComponent apodData={apodData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewContentPage;
