// ==================================================
// 任务描述：监听文件改动
// ==================================================

var path = require('path');

module.exports = function (gulp, opts, config, $) {
  gulp.task('watch', ['serve'], function() {
    // 监听stylus文件
    gulp.watch(config.stylus.src.map(path.normalize), ['stylus']);

    // 监听jade文件
    gulp.watch(config.markup.src.map(path.normalize), ['markup']);

    // 监听图片文件
    gulp.watch(config.images.src, ['images']);

    // 监听coffee文件
    // gulp.watch(config.paths.assets + "/**/*.coffee", ['test']);

    // 监听测试文件
    // gulp.watch(config.test.unit.concat(config.test.e2e).map(path.normalize), ['test']);

    // 监听公用数据文件
    gulp.watch(config.data, ['markupAll']);

    // 监听脚本打包配置文件
    // gulp.watch(config.browserify.files, ['browserify']);
  });
};