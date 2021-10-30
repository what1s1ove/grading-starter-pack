const { generateOffers } = require('./offers/offers');

const EntityCount = {
  OFFERS: 10,
};

const initDatabase = () => ({
  offers: generateOffers(EntityCount.OFFERS),
});

module.exports = {
  initDatabase,
};
