var gulp        = require('gulp'),
    gulp-sass   = require('gulp-sass'),
    gulp-jade   = require('gulp-jade'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


gulp.task('serve', ['sass', 'jade'], function() {

  browserSync({

    server: { baseDir: "./app/" }

  });

  /* для простых приложений без jade sass и прочего */
  // gulp.watch("app/*.html").on('change', reload);
  // gulp.watch("app/css/*.css").on('change', reload);
  // gulp.watch("app/js/*.js").on('change', reload);

  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./src/jade/*.jade", ['jade']);

});

gulp.task('sass', function () {

    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true})
    );
});

gulp.task('jade', function () {
    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            pretty: true
        })
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true})
    );
});

gulp.task('default', ['serve']);
