'use strict';

var path = require('path');

function formatter () {
  var formats = {};

  return {
    add: function (name, val) {
      formats[name] = val;
    },
    get: function (filename) {
      var extension = path.extname(filename);
      var lower = extension.toLowerCase();
      var format = formats[lower];
      return format;
    }
  };
}

var img = formatter();
var css = formatter();

img.add('.png', 'png');
img.add('.jpg', 'jpeg');
img.add('.jpeg', 'jpeg');

css.add('.styl', 'stylus');
css.add('.stylus', 'stylus');
css.add('.sass', 'sass');
css.add('.scss', 'scss');
css.add('.less', 'less');
css.add('.json', 'json');
css.add('.css', 'css');

module.exports = {
  css: css,
  img: img
};
