const RANDOM_SEPARATOR = 0.5;

const getShuffledItems = (items) => {
  return items.slice().sort(() => Math.random() - RANDOM_SEPARATOR);
};

module.exports = {
  getShuffledItems,
};
