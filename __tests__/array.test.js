const { addItemToArray } = require('../utils/array.js');

describe('array functions', () => {
  it('should add a string to the end of an array and (not mutate the original array)', () => {
    //arrange
    const originalArray = ['hello', 'world'];
    const newItem = 'again';
    const expectedResult = ['hello', 'world', 'again'];
    // act
    const result = addItemToArray(originalArray, newItem);

    //assert
    expect(result).toEqual(expectedResult);
    // expect(originalArray.length).toBe(2);
    expect(originalArray).toEqual(['hello', 'world']);
  });

  it('should throw an error if we add anything other than a string to an array', () => {
    const originalArray = ['hello', 'world'];
    const newItem = 5;

    // act
    const result = () => {
      addItemToArray(originalArray, newItem);
    };

    //assert
    expect(result).toThrowError("it's not a string");
  });
});
