const { page, component } = require('./settings');

module.exports = function (plop) {
  plop.setGenerator('Page', page);
  plop.setGenerator('Component', component);
};
