const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp
        .src('./src/assets/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/assets/styles'));
}

function images() {
    return gulp.src('./src/assets/images/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/assets/images'));
}

function scripts() {
    return gulp.src('./src/assets/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/assets/js'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/assets/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/assets/js/*.js', gulp.parallel(scripts));
};
