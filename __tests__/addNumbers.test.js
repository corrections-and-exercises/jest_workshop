const { addNumbers } = require('../utils/addNumbers.js');

describe('addition', () => {
  test('add two numbers', () => {
    //arrange
    const num1 = 5;
    const num2 = 4;

    const expectedValue = 9;
    // act

    const result = addNumbers(num1, num2);

    //assert
    expect(result).toBe(9);
  });

  it('should return NaN if arguments are not numbers', () => {
    //arrange
    const num1 = '5';
    const num2 = 4;
    // act
    const result = addNumbers(num1, num2);

    //assert
    expect(result).toBeNaN();
  });
});
