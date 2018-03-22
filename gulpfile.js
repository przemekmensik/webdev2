var gulp =        require('gulp');
var sass =        require('gulp-sass');
var plumber =     require('gulp-plumber');
var browserSync = require('browser-sync').create();
var sourcemaps =  require('gulp-sourcemaps');


var handleError = function(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('browserSync',function(){
    browserSync.init({
          server: "./",
          notify: false
    });
});


gulp.task('sass', function() {

  return gulp.src('./src/scss/main.scss')
  .pipe(plumber({
      errorHandler: handleError
  }))
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }))  //nested, expanded,
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('watch',function(){
  gulp.watch('./src/scss/**/*.scss',['sass']);
  gulp.watch('*.html').on('change',browserSync.reload);
});

gulp.task('default', function(){
  console.log('Uruchamia domyślne zadanie gulpa')
  gulp.start(['browserSync','watch']);
});
