// ==================================================
// 任务描述：生成静态网页
// ==================================================

module.exports = function (gulp, opts, $) {
  gulp.task('build', [
    //'browserify',
    'generate',
    'stylus',
    'markup',
    'images',
    'assets'
  ]);
};