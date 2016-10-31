// Karma configuration
// Generated on Fri May 06 2016 19:01:33 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
      files: [
        "../src/js/vendor/jquery-2.1.4.min.js",
        "../src/js/vendor/angular-1.4.4/angular.min.js",
        "../src/js/vendor/angular-1.4.4/angular-sanitize.min.js",
        "../src/js/vendor/angular-1.4.4/angular-loader.min.js",
        "../src/js/vendor/angular-1.4.4/angular-route.min.js",
        "../src/js/vendor/angular-1.4.4/angular-resource.min.js",
        "../src/js/vendor/angular-1.4.4/angular-messages.min.js",
        "../src/js/vendor/angular-1.4.4/angular-cookies.min.js",
        "../src/js/vendor/angular-1.4.4/angular-mocks.js",
        "../src/js/vendor/angular-1.4.4/angular-touch.min.js",
        "../src/js/vendor/angular-1.4.4/angular-animate.min.js",
        "../src/js/vendor/angular-1.4.4/angular-aria.min.js",
        '../src/js/app.js',
        '../src/js/services/services.js',
        '../src/js/directives/directives.js',
        '../src/js/services/notification/$notification.js',
        '../src/js/directives/notifications/notifications.js',
        '../src/js/directives/alert-msg/alert-msg.js',
        '../src/js/controllers/socialBaseController.js',
        'tests/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml', 'mocha'],
  
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      }
    }, 

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
