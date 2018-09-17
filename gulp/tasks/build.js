var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');

var usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function(){
  return del("./docs");
})

gulp.task('optimizeImages',['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
      progressive:true,
      interlaced:true,
      multipass:true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});


gulp.task('usemin',['deleteDistFolder'], function(){
  return gulp.src('./app/index.html')
  .pipe(usemin())
  .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);
