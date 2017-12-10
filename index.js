/* jshint node: true */
'use strict';

var defaults    = require('lodash/defaults');
var postcss     = require('broccoli-postcss');
var flexibility = require('postcss-flexibility');
var Funnel      = require('broccoli-funnel');
var map         = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-flexibility',

  treeForVendor: function() {
    var flexibilityLib = new Funnel('bower_components', {
      files: ['flexibility/flexibility.js'],
      getDestinationPath: function(relativePath) {
        return 'fastboot-flexibility.js';
      }
    });
    return map(flexibilityLib, (content) => 'if (typeof FastBoot === \'undefined\') { ' + content + ' }');
  },

  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);
    this.options = defaults(this.app.options.flexibility || {}, {
      enabled: true,
      plugins: [{
        module: flexibility
      }]
    });

    this.enabled = this.options.enabled;
    delete this.options.enabled;

    if (this.enabled) {
      app.import('vendor/fastboot-flexibility.js');
    }
  },

  postprocessTree: function(type, tree) {
    if ((type === 'all' || type === 'styles') && this.enabled) {
      tree = postcss(tree, this.options);
    }

    return tree;
  },

  isDevelopingAddon: function() {
    return true;
  }
};
