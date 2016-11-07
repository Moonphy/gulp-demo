// ==================================================
// 任务描述：单元测试
// ==================================================

var handleErrors = require('../utilities/handleErrors');

module.exports = function (gulp, opts, config, $) {
  gulp.task('unitTest', function() {
    gulp.src(config.test.unit)
      .pipe($.mocha({
        reporter: 'spec'
      }))
      .on('error', handleErrors);
  });
};