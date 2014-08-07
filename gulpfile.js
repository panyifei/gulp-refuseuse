var refuseuse=require('gulp-refuseuse');
var gulp = require('gulp');

gulp.task('task',function(){
  gulp.src("./lib/aa.js")
  .pipe(refuseuse([{type:'Function',value:'_use'}]))
  .pipe(refuseuse([{type:'Function',value:'_use'}]));
});