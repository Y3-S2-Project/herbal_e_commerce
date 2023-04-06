const dotenv = require('dotenv').config().parsed

module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
}
