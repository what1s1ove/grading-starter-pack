const { QuestLevel, QuestType } = require('../../common/enums/enums');
const {
  generateItems,
  getRandomItem,
  getRandomItems,
  getRandomNumber,
} = require('../../helpers/helpers');

const INCREASE_COUNT_ID_FOR_IDX = 1;

const QuestConfig = {
  TITLES: [
    'Склеп',
    'Маньяк',
    'Ритуал',
    'История призраков',
    'Тайны старого особняка',
    'Хижина в лесу',
    'Убийца',
    'Волошба',
    'Хмурый Лес',
    'Финальный день',
    'Заброшенная усадьба',
  ],
  DESCRIPTIONS: {
    COUNT: {
      MIN: 1,
    },
    SENTENCES: [
      'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя.',
      'Никто не помнит, что произошло прошлым вечером.',
      'Руки и ноги связаным, но одному из вас получилось освободиться.',
      'На стене висит пугающий таймер и запущен отстёт.',
      'Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
      'Он уже рядом.',
    ],
  },
  IMG_COUNT: {
    MIN: 1,
    MAX: 9,
  },
  PEOPLE_COUNT: {
    MIN_COUNT: {
      MIN: 1,
      MAX: 3,
    },
    MAX_COUNT: {
      MIN: 4,
      MAX: 6,
    },
  },
  DURATIONS: [30, 60, 90, 120],
};

const questLevels = Object.values(QuestLevel);
const questTypes = Object.values(QuestType);

const generateQuest = (idx) => {
  const imgNumber = getRandomNumber(QuestConfig.IMG_COUNT.MIN, QuestConfig.IMG_COUNT.MAX);

  return {
    id: idx + INCREASE_COUNT_ID_FOR_IDX,
    title: getRandomItem(QuestConfig.TITLES),
    description: getRandomItems(
      QuestConfig.DESCRIPTIONS.SENTENCES,
      getRandomNumber(
        QuestConfig.DESCRIPTIONS.COUNT.MIN,
        QuestConfig.DESCRIPTIONS.SENTENCES.length,
      ),
    ).join(' '),
    preview: `img/preview-${imgNumber}.jpg`,
    cover: `img/cover-${imgNumber}.jpg`,
    type: getRandomItem(questLevels),
    level: getRandomItem(questTypes),
    minPeopleCount: getRandomNumber(
      QuestConfig.PEOPLE_COUNT.MIN_COUNT.MIN,
      QuestConfig.PEOPLE_COUNT.MIN_COUNT.MAX,
    ),
    maxPeopleCount: getRandomNumber(
      QuestConfig.PEOPLE_COUNT.MAX_COUNT.MIN,
      QuestConfig.PEOPLE_COUNT.MAX_COUNT.MAX,
    ),
    duration: getRandomItem(QuestConfig.DURATIONS),
  }
};

const generateQuests = (count) => {
  return generateItems(count, (_, idx) => generateQuest(idx));
};

module.exports = {
  generateQuests,
};
