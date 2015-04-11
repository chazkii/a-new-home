'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var reload = browserSync.reload;

gulp.task('build:js', function() {
    return browserify({debug: true})
        .transform([babelify, reactify])
        .require(require.resolve('./src/assets/scripts/index.jsx'), {entry: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/assets/'))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['build:js']);

gulp.task('watch', ['build'], function() {
    browserSync({
        proxy: 'http://localhost:5000/',
        open: false,
        notify: false
    });

    gulp.watch(['src/assets/scripts/**/*.{js,jsx}'], ['build:js']);
    gulp.watch(['src/assets/css/**/*.css'], reload);
    gulp.watch(['src/views/**/*.hbs'], reload);
});

gulp.task('default', ['watch']);
