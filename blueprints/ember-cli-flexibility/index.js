/* jshint node:true */
module.exports = {
  description: 'Installs Flexibility polyfill',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('flexibility', '^2.0.1');
  }
};
