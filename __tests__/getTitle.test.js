const { fetchData } = require('../utils/fetch.js');
jest.mock('../utils/fetch.js');

const { getTitle } = require('../utils/getTitle.js');

describe('getting a title', () => {
  test('test function to fetch data and return title', async () => {
    //arrange
    const mockResult = {
      userId: 10,
      id: 10,
      title: 'hello world',
      completed: true,
    };

    const expectedResult = mockResult.title;

    fetchData.mockResolvedValue(mockResult);
    //act

    const result = await getTitle();

    //assert
    expect(result).toBe(expectedResult);
  });
});
