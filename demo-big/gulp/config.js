// ==================================================
// 基础配置
// ==================================================

// 主要目录
var src = "./src",
    dist = "./dist",
    build = "./public",
    test = "./tests",
    assets = src + "/assets";

module.exports = {
  paths: {
    src: src,
    dist: dist,
    build: build,
    test: test,
    assets: assets
  },

  // 静态页面公用数据文件
  data: src + '/_data.json',

  browserSync: {
    server: {
      baseDir: [build]
    }
  },

  assets: {
    src: assets + "/**/*.+(css|js|eot|svg|ttf|woff)",
    build: build,
    dist: dist
  },

  stylus: {
    src: [
      assets + "/**/*.styl"
    ],
    excluded: [
      "**/_*.styl"
    ],
    build: build,
    dist: dist
  },

  markup: {
    src: [
      src + "/demos/**/*.jade"
    ],
    excluded: [
      "**/_*.jade"
    ],
    build: build + '/demos',
    dist: dist + '/demos'
  },

  images: {
    src: [
      assets + "/images/**/*"
    ],
    build: build + '/images',
    dist: dist + '/images'
  },
    sprite:{
        src: [
            assets + "/images/sprites/**/*"
        ],
        build: assets + "/images"
    },

  collection: {
    src: [
      src + "/index.jade"
    ],
    build: build,
    dist: dist
  },

  browserify: {
    extensions: [
      ".coffee"
    ],
    files: "./browserify.json"
  },

  test: {
    unit: [
      test + '/unit/**/*.coffee'
    ],
    e2e: [
      test + '/e2e/**/*.coffee'
    ]
  }
};