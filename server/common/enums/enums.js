const api = require('./api/api');
const http = require('./http/http');
const order = require('./order/order');
const quest = require('./quest/quest');

module.exports = {
  ...api,
  ...http,
  ...order,
  ...quest,
};
