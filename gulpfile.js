var browserify = require('browserify'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    replace = require("gulp-replace"),
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
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
	});

	var b = browserify(opts);
	if(isWatch) {
		b = watchify(b);
	}

	var bundle = function () {
    gulp.src('README.md')
    .pipe(markdown())
    .pipe(gulp.dest('docs/build/'));

		return b.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source(name + ".js"))//.pipe(source('bundle.js'))
        /*
        .pipe(rename(function (path) {
					path.extname = '.js';
					path.basename = name;
				}))
        */
				.pipe(gulp.dest(dest))
				.pipe(connect.reload());
	}
	if(isWatch) {
		b.on('update', bundle);
		b.on('log', gutil.log);
	}
	return bundle;
}

gulp.task('js', build('./docs/src/app.jsx','./docs/build/',  'app', true));
gulp.task('js:nowatch', build('./docs/src/app.jsx','./docs/build/', 'app', false));
gulp.task('js:release', function() {
  gulp.src('components/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('lib'));

  gulp.src(['components/index.js'])
        .pipe(replace(/jsx/g, 'js'))
        .pipe(gulp.dest('lib'));
});

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'docs/build',
		fallback : 'docs/build/index.html',
	});
});

gulp.task('server', function() {
	connect.server({
		root : 'docs/build',
		fallback : 'docs/build/index.html',
	});
});
