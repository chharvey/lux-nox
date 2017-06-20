var gulp = require('gulp')
var rename = require('gulp-rename')
var pug = require('gulp-pug')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var clean_css = require('gulp-clean-css')

gulp.task('pug:docs', function () {
  return gulp.src('docs/{index,sample,use,accessibility}.pug')
    .pipe(pug({
      basedir: './'
    , locals: {
        Docs: require('./docs/_models/Docs.class.js')
      }
    }))
    .pipe(gulp.dest('./docs/'))
})

gulp.task('lessc:docs', function () {
  return gulp.src('docs/styles/docs.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true
    , cascade: false
    }))
    .pipe(gulp.dest('./docs/styles/'))
})

gulp.task('lessc:lux-nox', function () {
  return gulp.src('lux-nox.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true
    , cascade: false
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('minify', ['lessc:lux-nox'], function () {
  return gulp.src('lux-nox.css')
    .pipe(clean_css())
    .pipe(rename('lux-nox.min.css')) // TODO: use a SourceMap!
    .pipe(gulp.dest('./'))
})

gulp.task('build', ['pug:docs', 'lessc:docs', 'minify'])
