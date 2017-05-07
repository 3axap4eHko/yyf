const Del = require('del');
const Gulp = require('gulp');
const ESLint = require('gulp-eslint');
const Sourcemaps = require('gulp-sourcemaps');
const Babel = require('gulp-babel');
const Uglify = require('gulp-uglify');
const Export = require('gulp-export');

const sourceDir = './src';
const buildDir = './build';


Gulp.task('clean', cb => {
  return Del([buildDir], cb);
});

Gulp.task('js-compile', ['clean'], function () {
  return Gulp.src([`${sourceDir}/**/*.js`])
    .pipe(ESLint())
    .pipe(ESLint.format())
    .pipe(ESLint.failAfterError())
    .pipe(Export())
    .pipe(Sourcemaps.init())
    .pipe(Babel())
    .pipe(Uglify())
    .pipe(Sourcemaps.write('.'))
    .pipe(Gulp.dest(buildDir));
});

Gulp.task('files-copy', ['clean'], function () {
  return Gulp.src(['./package.json', './README.md', './LICENSE'])
    .pipe(Gulp.dest(buildDir));
});

Gulp.task('docs-copy', ['clean', 'js-compile'], function () {
  return Gulp.src(['./docs/**/*.*'])
    .pipe(Gulp.dest(`${buildDir}/docs`));
});

Gulp.task('default', ['clean', 'js-compile', 'files-copy', 'docs-copy']);