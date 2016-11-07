// ==================================================
// 任务描述：编译Coffeescript文件并打包
// ==================================================

var browserify = require('browserify'),
    watchify = require('watchify'),
    fs = require('fs'),
    path = require('path'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utilities/handleErrors'),
    logger = require('../utilities/logger');

module.exports = function (gulp, opts, config, $) {
  gulp.task('browserify', function (callback) {
    var bundleFiles = JSON.parse(fs.readFileSync(path.resolve(config.browserify.files)));
    var bundleQueue = bundleFiles.length;

    var createBundle = function (options) {
      var bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false,
        entries: options.input,
        extensions: config.browserify.extensions,
        debug: options.debug
      });

      var reportFinished = function () {
        logger.end(options.output, "Bundled");
        if(bundleQueue) {
          bundleQueue--;
          if(bundleQueue === 0) {
            callback();
          }
        }
        return;
      }

      var rebundle = function () {
        logger.start(options.output, "Bundling");
        bundler.bundle()
          .on("error", handleErrors)
          .pipe(source(options.output))
          .pipe(gulp.dest(options.destination))
          .on("end", reportFinished)
          .pipe(browserSync.reload({stream: true}));
      };

      // 如果是debug模式，使用watchify
      if(options.debug) {
        bundler = watchify(bundler);
        bundler.on("update", rebundle);
      }

      rebundle();
    };

    var createBundles = function (bundles) {
      bundles.forEach(function (bundle) {
        createBundle({
          input: path.resolve(bundle.input),
          output: bundle.output,
          extensions: bundle.extensions,
          destination: opts.p ? bundle.dist : bundle.build,
          debug: !opts.p
        });
      });
    };

    createBundles(bundleFiles);
  });
};