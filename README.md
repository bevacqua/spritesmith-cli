# spritesmith-cli

> Adds a CLI to the [spritesmith][1] module

Spritesmith **is awesome** but sometimes we don't want to [run it through Grunt][2].

# Install

```shell
npm install -D spritesmith-cli
```

# Usage

```shell
spritesmith [options]
```

These are the options you can set on the CLI.

Option | Description
-------|----------------------------------------------------------------------
`--rc` | Point to a different `.spritesmith.js` configuration file

The default configuration file used will be `.spritesmith.js` at the current working directory _(`process.cwd()`)_. This file should export a few properties. Note that you can export either a single object or an array. If you use an array you'll be able to create multiple spritesheets in one shot.

Examples:

```js
'use strict';

var util = require('util');

module.exports = {
  src: './client/img/icons/**/*.{png,gif,jpg}',
  destImage: '.bin/public/img/icons.png',
  destCSS: 'client/css/generated/icons.css',
  imgPath: '/img/icons.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  engine: 'gmsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    }
  }
};
```

```js
'use strict';

var util = require('util');

module.exports = [{
  src: './client/img/icons/**/*.{png,gif,jpg}',
  destImage: '.bin/public/img/icons.png',
  destCSS: 'client/css/generated/icons.css',
  imgPath: '/img/icons.png',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    }
  }
}, {
  src: './client/img/markdown-editor/**/*.{png,gif,jpg}',
  destImage: '.bin/public/img/markdown-editor.png',
  destCSS: 'client/css/generated/markdown-editor.styl',
  imgPath: '/img/markdown-editor.png',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.pm-%s:before', item.name);
    }
  }
}];
```

Note that `src` can be either a globbing pattern or an array of globbing patterns, it'll be passed straight to [`multi-glob`][3].

The `destImage` and `destCSS` properties are optional and can be omitted.
That means that you can create only one file depending on your needs.

That's about it. For configuration information please refer to the [`grunt-spritesmith`][2] and [`spritesmith`][1] packages.

# License

MIT


[1]: https://github.com/Ensighten/spritesmith
[2]: https://github.com/Ensighten/grunt-spritesmith
[3]: https://github.com/busterjs/multi-glob
