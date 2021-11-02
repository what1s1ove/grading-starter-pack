const {
  getShuffledItems,
} = require('../get-shuffled-items/get-shuffled-items.helper');

const RANDOM_ITEMS_START_IDX = 0;

const getRandomItems = (items, count) => {
  return getShuffledItems(items).slice(RANDOM_ITEMS_START_IDX, count);
};

module.exports = {
  getRandomItems,
};
