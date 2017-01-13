var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('styles/publish/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('styles/**/*.scss', ['styles']);
});