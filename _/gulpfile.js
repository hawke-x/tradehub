var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat');
    path = require('path');

	var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

env = 'production';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = '';
  sassStyle = 'compressed';
}

	jsSources = [
	  'components/js/affix.js',
	  'components/js/transition.js',
	  'components/js/tooltip.js',
	  'components/js/alert.js',
	  'components/js/button.js',
	  'components/js/carousel.js',
	  'components/js/dropdown.js',
	  'components/js/modal.js',
	  'components/js/popover.js',
	  'components/js/scrollspy.js',
	  'components/js/tab.js'
	];
	  
	
	gulp.task('js', function() {
		  gulp.src(jsSources)
			.pipe(concat('bootstrap.min.js'))
			.pipe(browserify())
			.on('error', gutil.log)
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(gulp.dest(outputDir + 'js'))
			//.pipe(connect.reload())
		});
		
		gulp.task('default', ['js']);
