const { sortArray } = require('../utils/sort.js');

it('should sort an array of numbers starting with the smallest one', () => {
  //arrange
  const originalArray = [5, 3, 4, 2, 1];
  const expectedResult = [1, 2, 3, 4, 5];
  //act
  const result = sortArray(originalArray);

  //assert
  expect(result).toEqual(originalArray);
});
