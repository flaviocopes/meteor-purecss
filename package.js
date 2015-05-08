Package.describe({
  name: 'flaviocopes:purecss',
  version: '0.6.0-a',
  // Brief, one-line summary of the package.
  summary: 'Add the PureCSS CSS library to a Meteor project',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/flaviocopes/meteor-purecss.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var path = Npm.require('path');
  var asset_path = path.join('css');
  api.addFiles(path.join(asset_path, 'pure-min.css'), 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('flaviocopes:purecss');
//   api.addFiles('purecss-tests.js');
// });
