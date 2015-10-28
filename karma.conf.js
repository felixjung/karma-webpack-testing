/* Karma configuration
 *
 * Karma with webpack:
 *   We use webpack as a preprovessor with the karma-webpack plugin. Every
 *   file detected by the patterns in files[] becomes an entry point for
 *   webpack.
 *
 * Here are lists of available npm modules for Karma:
 *  - Browsers: https://npmjs.org/browse/keyword/karma-launcher
 *  - Frameworks: https://npmjs.org/browse/keyword/karma-adapter
 *  - Preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
 *  - Reporters: https://npmjs.org/browse/keyword/karma-reporter
 *
 */

'use strict';

var adjustWebpackConfig = function(config) {
  // Change sourcemap type
  config.devtool = 'inline-source-map';

  // Remove the entry point
  config.entry = {};

  return config;
};

// Load webpack config
var webpackConfig = adjustWebpackConfig(require('./webpack.config.js'));

// Export the karma config file.
module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    files: [
      'test/**/*_spec.js',
    ],
    frameworks: ['jasmine'],
    plugins: [
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      'test/**/*_spec.js': ['webpack', 'sourcemap'],
    },
    client: {
      captureConsole: true
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: false
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    singleRun: true
  });
};
