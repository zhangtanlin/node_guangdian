var gulp = require("gulp");
var copy = require("copy");


gulp.task('copy',  function() {
  return gulp.src(['node_modules/jquery','node_modules/layui',])
    .pipe(gulp.dest("public"))
});

gulp.task('default',function() {
  gulp.watch("html");
});