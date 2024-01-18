const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/assets/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/assets/styles'));
}

function images() {
  return gulp.src('./src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch('./src/assets/styles/*.scss', gulp.parallel(styles));
}
