const {
  generateItems,
  getRandomId,
  getRandomTitle,
} = require('../../helpers/helpers');

const generateOffer = () => ({
  id: getRandomId(),
  title: getRandomTitle(),
});

const generateOffers = (count) => {
  return generateItems(count, generateOffer);
};

module.exports = {
  generateOffers,
};
