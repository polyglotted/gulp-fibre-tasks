var config = require('./gulp/config');

module.exports = function (gulp) {
  require('require-all')({
    dirname: __dirname + '/gulp',
    resolve: function (dep) {
      if (typeof dep === 'function') {
        return dep(config, gulp);
      }
    }
  });
};
