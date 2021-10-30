const { datatype } = require('faker');

const getRandomId = () => datatype.uuid();

module.exports = {
  getRandomId,
};
