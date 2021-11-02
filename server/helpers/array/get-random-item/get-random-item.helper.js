const { getRandomNumber } = require('../../number/number');

const RANDOM_ITEM_START_IDX = 0;
const RANDOM_ITEM_DECREMENT = 1;

const getRandomItem = (items) => {
  const randomIdx = getRandomNumber(
    RANDOM_ITEM_START_IDX,
    items.length - RANDOM_ITEM_DECREMENT,
  );

  return items[randomIdx];
};

module.exports = {
  getRandomItem,
};
