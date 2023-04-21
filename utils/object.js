const createUser = (name, age, city) => {
  return {
    name,
    age,
    location: {
      city,
    },
  };
};

module.exports = { createUser };
