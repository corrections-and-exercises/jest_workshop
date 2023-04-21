const addItemToArray = (array, item) => {
  if (typeof item !== 'string') throw new Error("it's not a string");
  array.push(item);
  return array;
};

module.exports = { addItemToArray };
