const {task, watch, src, dest} = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

task('views', () => {
  return src('./src/pages/*.pug')
    .pipe(pug({pretty: true,}))
    .pipe(dest('./dist'));
});

task('styles', () => {
    return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('./dist/css'));
});

task('images', () => {
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
});

task('default', () => {
    watch('./src/**/*.pug', task('views'));
    watch('./src/img/*', task('images'));
    watch('./src/sass/**/*.scss', task('styles'));
});



