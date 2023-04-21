const addItemToArray = (array, item) => {
  if (typeof item !== 'string') throw new Error("it's not a string");
  const copyArray = [...array];
  copyArray.push(item);
  return copyArray;
};

module.exports = { addItemToArray };
