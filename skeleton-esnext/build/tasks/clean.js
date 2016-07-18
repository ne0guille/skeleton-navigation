var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', ['unbundle'], function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});

gulp.task('clean-vendor-content', function () {
	return gulp.src([
		paths.outputContent + 'lib/'
	])
	.pipe(vinylPaths(del));
});


gulp.task('clean-foundation', function () {
	return gulp.src([
		paths.content.foundation + 'lib/'
	])
	.pipe(vinylPaths(del));
});

gulp.task('clean-site-content', function () {
	return gulp.src([
		paths.outputContent + 'site*.css',
		paths.outputContent + 'site*.map'
	])
	.pipe(vinylPaths(del));
});

gulp.task('clean-content', ['clean-foundation','clean-vendor-content','clean-site-content']);
