const { createUser } = require('../utils/object.js');

test('check if object has expected properties', () => {
  //arrange
  const schema = {
    name: expect.any(String),
    age: expect.any(Number),
    location: {
      city: expect.any(String),
    },
  };

  //act
  const name = 'Karl';
  const age = 20;
  const city = 'Berlin';

  const user = createUser(name, age, city);

  //assert

  expect(user).toEqual(schema);
});
