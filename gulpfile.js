const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));

function styles() {
  return gulp.src('./src/assets/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/assets/styles'));
}

exports.default = styles;
exports.watch = function () {
  gulp.watch('./src/assets/styles/*.scss', gulp.parallel(styles));
}
