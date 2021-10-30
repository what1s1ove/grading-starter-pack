const Joi = require('joi');
const { OrderKey } = require('../../common/enums/enums');

const orderCreatePayload = Joi.object({
  [OrderKey.FIRST_NAME]: Joi.string().required(),
  [OrderKey.LAST_NAME]: Joi.string().required(),
  [OrderKey.PEOPLE_COUNT]: Joi.number().positive().required(),
  [OrderKey.DATE]: Joi.string().isoDate().required(),
});

module.exports = {
  orderCreatePayload,
};
