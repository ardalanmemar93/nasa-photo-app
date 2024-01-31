//HistoryPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistoryPage = () => {
  const [apodDataList, setApodDataList] = useState([]);

  useEffect(() => {
    const fetchApodDataList = async () => {
      try {
        const response = await axios.get('/api/apod');
        setApodDataList(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApodDataList();
  }, []); 

  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleDetails = (itemId) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <div>
      {apodDataList.map((apodItem) => (
        <div key={apodItem._id} className="apod-item text-white">
          <button onClick={() => toggleDetails(apodItem._id)}>
            {expandedItemId === apodItem._id ? 'Hide Details' : 'Show Details'}
          </button>
          <h2>{apodItem.title}</h2>
          {expandedItemId === apodItem._id && (
            <div className="apod-details">
              <p>Date: {apodItem.date}</p>
              <p>Explanation: {apodItem.explanation}</p>
              <img src={apodItem.imageUrl} alt="APOD" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
