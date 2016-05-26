var gulp = require('gulp'),
  concat = require('gulp-concat'),
  prettify = require('gulp-jsbeautifier'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  templateCache = require('gulp-angular-templatecache');
var merge2 = require('merge2');

// beautify task
gulp.task('beautify', function () {
  return gulp.src(['src/**/*.js',
                   'src/**/*.html'], {
      base: './'
    })
    .pipe(prettify({
      debug: true
    }))
    .pipe(gulp.dest('./'));
});


//Below task combines the templateCache stream and source files and outputs concatinated file
gulp.task('default', ['beautify'], function () {
  return merge2(gulp.src('src/**/*.js'),
      gulp.src('src/**/*.html')
      .pipe(templateCache({
        module: 'angularFormlyBootstrapMaterial',
        transformUrl: function (url) {
          console.log(url.split('\\').pop());
          return url.split('\\').pop();
        }
      })))
    .pipe(concat('angular-formly-bootstrap-material.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename('angular-formly-bootstrap-material.min.js'))
    .pipe(gulp.dest('dist/'));
});
