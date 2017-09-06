var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cached = require('gulp-cached');
var partials = require('gulp-sass-partials-imported');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');


var input = './assests/scss/**/*.scss';
var output = './';



gulp.task('sass', function(){
  return gulp.src(input)
  .pipe(sourcemaps.init())
  .pipe( sass( {
  errLogToConsole : true,
  outputStyle : 'compressed'
}))
.pipe(sourcemaps.write())
 	.pipe(
    autoprefixer( {
    			browsers : [ 'last 2 versions' ],
    			cascade  : false
    		}))

  .pipe(gulp.dest(output))
  .pipe(browserSync.stream())
  // .pipe(sassdoc())
  // .resume();
})

gulp.task('default' , function (callback){
  runSequence(['sass','browserSync','watch'],
  callback)
  	gulp.watch('./assets/scss/*.scss', ['sass']);
})

// gulp.task('imagemin', function(){
//   return gulp.src('assests/images/**/*.+(png|jpg|gif|svg)')
//   .pipe
// })

gulp.task('browserSync', function(){
  browserSync.init({
    proxy: "http://elevateusa.dev/"

  })
})

gulp.task('watch', ['browserSync','sass'], function(){
  gulp.watch(input, ['sass']);
  gulp.watch('assests/js/**/*.js', browserSync.reload);
});

//
//
// var input = './scss/**/*.scss';
// var output = './';
//
// gulp.task('sass', function () {
// 	return gulp.src(input)
// 	.pipe(sourcemaps.init())
//   .pipe(partials(input))
// 	.pipe(sass({errors: true, outputStyle: 'compressed'}))
// 	.pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest(output))
// 	.pipe(browserSync.stream());
// });
//
// // Watch files for change and set Browser Sync
// gulp.task('watch', function() {
// 	// BrowserSync settings
// 	browserSync.init({
// 	proxy: "http://elevateusa.dev/",
// 	files: "./style.css"
// });
//
// // Scss file watcher
// gulp.watch(input, ['sass'])
// 	.on('change', function(event){
// 		console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
// 	});
// });
//
// // gulp.task( 'default', function() {
// // 	gulp.watch('./assets/scss/**/*.scss', ['sass']);
// //
// // });
//
// // Default task
//
// gulp.task('default', ['sass', 'watch']);
// gulp.task( 'default', function() {
//   browserSync.init({
//   proxy: "http://elevateusa.dev/",
//   // files: "./style.css"
// });
//   	gulp.watch('./scss/**/*.scss', ['sass']);
// });
//
// var gulp       = require('gulp');
// var config = require('./gulpConfig.json');
// var plugins  = require('gulp-load-plugins')(config.loadOpts);
// require('gulp-task-loader')();
//
// gulp.task( 'default', function() {
// 	plugins.runSequence(
// 		['scss', 'scripts', 'images:raster', 'images:vector'],
// 		'browser-sync'
// 	);
// 	gulp.watch('./assets/img/raw/**/*', ['images:raster', 'images:vector']);
// 	gulp.watch('./assets/scss/**/*.scss', ['scss']);
// 	gulp.watch(['./assets/js/vendor/*.js', './assets/js/custom/*.js'], ['scripts']);
// });
//
// gulp.task( 'scripts', function() {
// 	plugins.runSequence(
// 		['scripts:custom', 'scripts:vendor'],
// 		'scripts:app',
// 		plugins.browserSync.reload
// 	);
// });
//
// gulp.task( 'lint', function() {
// 	plugins.runSequence(
// 		'lint:js',
// 		'lint:styles'
// 	);
// });
