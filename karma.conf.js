module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'library/angular/angular.js',
            'library/angular-mocks/angular-mocks.js',
            'library/angular-resource/angular-resource.js',
            'src/*.js',
            'test/*.test.js'
        ],

        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};