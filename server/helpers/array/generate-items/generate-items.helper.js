const generateItems = (count, generateFn) => {
  return Array.from(new Array(count), generateFn);
};

module.exports = {
  generateItems,
};
