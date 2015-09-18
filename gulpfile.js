var browserify = require('browserify'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    markdown = require('gulp-markdown'),

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
		b.on('update', bundle);
		b.on('log', gutil.log);
	}
	return bundle;

	function release() {
    gulp.src('README.md')
      .pipe(markdown())
      .pipe(gulp.dest('docs'));
	}
}

gulp.task('js', build('./docs/app.jsx','./docs',  'app', true));
gulp.task('js:nowatch', build('./docs/app.jsx', './docs', 'app', false));
gulp.task('js:release', build('./components/index.js', './lib', 'index', false));

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'docs',
		fallback : 'docs/index.html',
	});
});

gulp.task('server', function() {
	connect.server({
		root : 'docs',
		fallback : 'docs/index.html',
	});
});
