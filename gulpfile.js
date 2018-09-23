var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', function(){
	gulp.src('./some_project/**/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./some_project'));
})


gulp.task('sass:watch', function(){
	gulp.watch('./some_project/**/*.scss', ['sass']);
})
