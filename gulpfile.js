var refuseuse=require('gulp-refuseuse');
var gulp = require('gulp');

gulp.task('scripts',function(){
  gulp.src("./lib/aa.js")
  .pipe(refuseuse('_aa'))
  .pipe(refuseuse('_use'));
});