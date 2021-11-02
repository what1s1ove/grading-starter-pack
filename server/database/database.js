const { generateQuests } = require('./quests/quests');

const EntityCount = {
  QUESTS: 10,
};

const initDatabase = () => ({
  quests: generateQuests(EntityCount.QUESTS),
});

module.exports = {
  initDatabase,
};
