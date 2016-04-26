/* jshint node: true */
'use strict';

var defaults    = require('lodash/defaults');
var postcss     = require('broccoli-postcss');
var flexibility = require('postcss-flexibility');

module.exports = {
  name: 'ember-cli-flexibility',

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
      app.import(app.bowerDirectory + '/flexibility/dist/flexibility.js');
    }
  },

  postprocessTree: function(type, tree) {
    if ((type === 'all' || type === 'styles') && this.enabled) {
      tree = postcss(tree, this.options);
    }

    return tree;
  }
};
