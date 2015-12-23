var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({
        browsers: ["last 5 versions"],
        cascade: true
    }),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

function getDate(format){
    return  gutil.date( format|| "dd-mm-yyyy HH:MM");
}

gulp.task('styles', function () {
    return gulp.src('src/assets/css/*.less')
        .pipe(less({plugins:[autoprefix]}))
        .pipe(header('/*!<%= date %>  */\n', {
            date : getDate()
        }))
        //.pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({message: 'styles task complete'}));
});

gulp.task('scripts', function () {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({message: 'scripts task complete'}))
});

gulp.task('images', function () {
    return gulp.src('src/assets/img/**/*')
        .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({message: 'images task complete'}));
});

gulp.task('copy', function () {
    gulp.src('src/**/*.+(html|css|eot|svg|ttf|woff|mp3)')
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
    del(['dist/'], function (event) {
        console.log('file' + event.path + 'was' + event.type + 'running tasks!');
    });
});

gulp.task('default', ['clean'], function () {
    gulp.start('styles','scripts','images');
});

gulp.task('browser-sync', function () {
    var files = [
        'dist/**/*.html',
        'dist/css/**/*.css',
        'dist/img/**/*.png',
        'dist/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('watch',['browser-sync'], function () {

    gulp.watch('src/assets/css/*.less', ['styles']);
    gulp.watch('src/assets/js/**/*.js',['scripts']);
    gulp.watch('src/assets/img/**/*', ['images']);
    gulp.watch('src/views/*.html', ['copy']);

    //livereload.listen();
    //gulp.watch(['dist/**'].on('change',livereload.changed));

    //gulp.watch(['dist/**']).on('change', browserSync.reload);
});