const { name } = require('faker');

const getRandomTitle = () => name.title();

module.exports = {
  getRandomTitle,
};
