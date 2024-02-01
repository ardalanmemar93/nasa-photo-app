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
    <div className="container mx-auto p-4">
      {apodDataList.map((apodItem) => (
        <div key={apodItem._id}           className="apod-item mb-4 p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition duration-300"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-white cursor-pointer" onClick={() => toggleDetails(apodItem._id)}>
              {apodItem.title}
            </h2>
            <button
              onClick={() => toggleDetails(apodItem._id)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {expandedItemId === apodItem._id ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
          {expandedItemId === apodItem._id && (
            <div className="apod-details mt-2">
              <p className="text-gray-300">Date: {apodItem.date}</p>
              <p className="text-gray-300">Explanation: {apodItem.explanation}</p>
              <img src={apodItem.imageUrl} alt="APOD" className="mt-2 rounded-md shadow-md" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
