var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


gulp.task('serve', function() {

  browserSync({

    server: { baseDir: "./app/" }

  });

  gulp.watch("app/*.html").on('change', reload);
  gulp.watch("app/css/*.css").on('change', reload);
  gulp.watch("app/js/*.js").on('change', reload);

});

gulp.task('default', ['serve']);
