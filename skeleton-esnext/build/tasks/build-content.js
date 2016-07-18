var gulp = require('gulp');

var runSequence = require('run-sequence');
var paths = require('../paths');
var flatten = require('gulp-flatten');

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var merge = require('merge2');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var rename = require('gulp-rename');

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task('foundation', function () {
	return merge(
		gulp.src([paths.content.foundation + 'foundation.scss', paths.content.foundation + 'normalize.scss'])
			.pipe(flatten())
			.pipe(gulp.dest(paths.content.root + 'foundation')),
		gulp.src([paths.content.foundation + 'foundation/_functions.scss', paths.content.foundation + 'foundation/_settings.scss'])
			.pipe(flatten())
			.pipe(gulp.dest(paths.content.root + 'foundation/foundation')),
		gulp.src(paths.content.foundation + 'foundation/components/*.scss')
			.pipe(flatten())
			.pipe(gulp.dest(paths.content.root + 'foundation/foundation/components'))
	);
});

gulp.task('build-vendor-content', function () {
	return merge(
			gulp.src(paths.content.css)
				.pipe(sourcemaps.init()),
			gulp.src(paths.content.root + 'foundation.scss')
				.pipe(sass())
					.on('error', handleError)
				.pipe(sourcemaps.write())
		)
		.pipe(postcss([csswring]))
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest(paths.outputContent + 'lib/css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.outputContent + 'lib/css'));
});

gulp.task('build-site-content', function () {
	return gulp.src(paths.content.root + 'site.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
			.on('error', handleError)
		.pipe(gulp.dest(paths.outputContent))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.outputContent));
});

gulp.task('build-fonts', function () {
	return gulp.src(paths.content.fonts)
	  .pipe(flatten())
	  .pipe(gulp.dest(paths.outputContent + 'lib/fonts'));
});

gulp.task('build-content', ['foundation'], function () {
	return runSequence(
		'build-vendor-content',
		'build-fonts',
		'build-site-content'
	);
});
