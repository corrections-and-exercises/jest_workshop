const axios = require('axios');

const fetchData = async () => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchData };
