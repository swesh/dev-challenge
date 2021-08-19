module.exports = function (config) {
    config.set({
        
        frameworks: ['jasmine', 'commonjs', 'browserify'],
        files: [
            'site/stomp.js',            
            'site/sparkline.js',
            'site/App.js',
            'site/Consumer.js',
            'site/TableDrawer.js',
            'test/spec/*js',
        ],
        reporters: ['progress','coverage'],
        preprocessors: { 
         'test/spec/*.js': ['coverage', 'commonjs'],
         'site/stomp.js': ['browserify'],
         'site/sparkline.js': ['browserify'],
         'site/App.js': ['coverage', 'commonjs'], 
         'site/Consumer.js': ['coverage', 'commonjs'], 
         'site/TableDrawer.js': ['coverage', 'commonjs'] },
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,

        singleRun: true,

    })
}