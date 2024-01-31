const axios = require('axios');
const API_KEY = process.env.API_KEY;

const config = {
  method: 'get',
  url: 'https://api.nasa.gov/planetary/apod',
  params: {
    api_key: API_KEY,
  },
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.error(error);
  });
