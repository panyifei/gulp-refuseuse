# gulp-refuseuse


根据你传入的参数拒绝使用一些特定的global function，但是如果你在自己的全局作用域里面声明过，是可以使用的。
提供了一个gulp task。


## Download

使用前请先安装：

    npm install gulp-refuseuse


## Example

var refuseuse=require('gulp-refuseuse');
var gulp = require('gulp');

gulp.task('scripts',function(){
  gulp.src("./lib/aa.js")
  .pipe(refuseuse([{type:'Function',value:'_use'}]))
  .pipe(refuseuse([{type:'Function',value:'_use'}]));
});




