const gulp = require('gulp');
const plumber = require('gulp-plumber')

module.exports = function html() {
  return gulp.src('*.html')
    .pipe(plumber())
    .pipe(gulp.dest('build'))
}
