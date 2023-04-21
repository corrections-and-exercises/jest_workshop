const { fetchData } = require('./fetch.js');

const getTitle = async () => {
  const result = await fetchData();
  return result.title;
};

module.exports = { getTitle };
