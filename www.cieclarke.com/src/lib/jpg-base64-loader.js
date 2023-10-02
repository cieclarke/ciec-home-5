// src/mp3-loader.js
var fs = require('fs');

module.exports = function (source) {
  const imageAsBase64 = fs.readFileSync(this.resourcePath, 'base64');

  return imageAsBase64;
};
