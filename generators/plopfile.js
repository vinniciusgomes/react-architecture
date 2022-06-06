const { page, component, hook } = require('./settings');

module.exports = function (plop) {
  plop.setGenerator('page', page);
  plop.setGenerator('component', component);
  plop.setGenerator('hook', hook);
};
