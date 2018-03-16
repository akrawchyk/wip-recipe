const url = require('url')
const package = require('./package.json')

module.exports = {
  baseUrl: url.parse(package.homepage).path,
  lintOnSave: false
};
