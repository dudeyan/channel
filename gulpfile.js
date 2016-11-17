var gulp = require('gulp'),
    less = require('gulp-less'),
	concat = require('gulp-concat')
	//cssmin = require('gulp-minify-css');
gulp.task('testLess', function () {
    gulp.src('less/whole.less')
        .pipe(less())
		//.pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
		.pipe(concat('style.css'))
        .pipe(gulp.dest('css'));
});
gulp.task('testWatch', function () {
    gulp.watch('**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});