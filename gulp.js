var gulp = require('gulp'),
connect = require('gulp-connect'),
reload = require('gulp-livereload'), 
less = require('gulp-less'),
watch = require('gulp-watch');

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('watch', function(){
	watch('css/**/*.css');
});

gulp.task('default', ['connect', 'watch']);