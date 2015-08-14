var browserify = require('browserify'),
    //concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    //open = require('gulp-open'),
    //plumber = require('gulp-plumber'),
    //livereload = require('gulp-livereload'),

    source = require('vinyl-source-stream2'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    assign = require('lodash').assign,
    gulp = require('gulp');


function build(path, dest, name, isWatch) {
	var opts = assign({}, watchify.args, {
		entries : path,
		transform : [reactify],
	});

	var b = browserify(opts);
	if(isWatch) {
		b = watchify(b);
	}

	var bundle = function () {
		if(isWatch) release();
		return b.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source('bundle.js'))
				.pipe(rename(function (path) {
					path.extname = '.js';
					path.basename = name;
				}))
				.pipe(gulp.dest(dest))
				.pipe(connect.reload());
	}
	if(isWatch) {
		b.on('update', bundle); // on any dep update, runs the bundler
		b.on('log', gutil.log); // output build logs to terminal
	}
	return bundle;
	////////////////
	function release() {
		gulp.src('components/**/*.jsx')
			.pipe(react())
			.pipe(gulp.dest('lib'));
	}
}

// so you can run `gulp js` to build the file
gulp.task('js', build('./docs/app.jsx','./docs',  'app', true));
gulp.task('js:nowatch', build('./docs/app.jsx', './docs', 'app', false));
gulp.task('js:release', build('./components/index.js', './lib', 'index', false));

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'docs',
		//livereload : true,
		fallback : 'docs/index.html',
	});
});

gulp.task('server', function() {
	connect.server({
		root : 'docs',
		fallback : 'docs/index.html',
	});
});
/*
gulp
  // performs magic
  .task('browserify', function(){
    gulp.src('app.js')
      .pipe(plumber())
      .pipe(
        browserify({
          transform: 'reactify',
          debug: !gulp.env.production
        })
      )
      .pipe(concat('app.js'))
      .pipe(plumber.stop())
      .pipe(gulp.dest('dist/'))
      .pipe(livereload());
  })
*/
  // local development server
  /*
  .task('connect', function(){
    connect.server({
      root: ['dist'],
      port: '8080',
      base: 'http://localhost',
      livereload: true
    });
  })
  // opens the application in chrome
  .task('open', function(){
    gulp
      .src('dist/index.html')
      .pipe(
        open('', {app: 'google chrome',url: 'http://localhost:8080/'})
      );
  })

  // build the application
  .task('default', ['browserify', 'copy', 'connect'])
  .task('default2', ['browserify', 'copy'])

  // watch for source changes
  .task('watch', ['default'], function(){
    livereload.listen();

    */
    //gulp.watch('/**/*.*', ['default2']);
  //});
