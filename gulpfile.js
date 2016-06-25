var gulp = require('gulp')
	,nodemon = require('gulp-nodemon')
	,browserify = require('browserify')
	,gulpCssNano = require('gulp-cssnano')
	,buffer = require('vinyl-buffer')
	,source = require("vinyl-source-stream")
	,gulpUglify = require('gulp-uglify')
	,gulpIf = require('gulp-if')
	,gulpLess = require('gulp-less')
	,reactify = require('reactify')
	,config = require('./config');

var argv = require('yargs').argv;

gulp.task('nodemon', function () {
	nodemon(config.get('nodemon'))
		.on('restart', function () {
			console.log("Server restarted!");
		});
});

gulp.task('browserify', function(){
	if(!argv.prod) gulp.watch(['lib/react/**', 'config/**'], ['browserify']);

	return browserify({debug: !argv.prod})
		.transform(reactify)
		.add('lib/react/app.jsx')
		.bundle()
		.pipe(source("app.js"))
		.pipe(buffer())
		.pipe(gulpIf(argv.prod, gulpUglify()))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('style', function () {
	if(!argv.prod) gulp.watch(['less/**'], ['style']);

	return gulp.src('lib/less/app.less')
		.pipe(gulpLess())
		.pipe(gulpCssNano())
		.pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['browserify', 'style', 'nodemon']);