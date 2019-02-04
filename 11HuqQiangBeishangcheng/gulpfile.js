var gulp = require('gulp');
var jshint = require('gulp-jshint');//js语法检测插件
var concat = require('gulp-concat');//js合并插件
var uglify = require('gulp-uglify');//js压缩插件
var html = require('gulp-minify-html');//html压缩插件
var mcss = require('gulp-minify-css');//css压缩插件

    //本项目 考虑到 html压缩  css压缩  js合并压缩  
    //还有实时的监听！
/*******************实验********************************/
        gulp.task('default',function(){
           //将默认的任务代码放在这里

        });
 /********************压缩html,并且监听，从新复制到dist目录*******/    
		//4.压缩html文件。
		gulp.task('uglifyhtml',function(){
			gulp.src('src/*.html')
			.pipe(html())//使用压缩插件
			.pipe(gulp.dest('dist/'));//输出
		});
		
		gulp.task('watchuglifyhtml',function(){
			gulp.watch('src/*.html',function(){
				gulp.run('uglifyhtml');
			});
	    });
/**********************压缩css文件，并且监听，从新复制到dist目录*****/
		gulp.task('uglifycss',function(){
			gulp.src('src/css/*.css')
			.pipe(mcss())//使用压缩插件
			.pipe(gulp.dest('dist/css/'));//输出
		});
		gulp.task('watchuglifycss',function(){
			gulp.watch('src/css/*.css',function(){
				gulp.run('uglifycss');
			});
		});
/***************************js监听和复制**********************************/		
		gulp.task('copy',function(){
			gulp.src('src/script/*.js')
			.pipe(gulp.dest('dist/script/'));
		});
		
		
		gulp.task('watchcopy',function(){
			gulp.watch('src/script/*.js',function(){//监听js下面的所有的js文件
				gulp.run('copy');//执行copy任务。
			});
		});
/*******************************图片复制****************************************/
		gulp.task('copyimg',function(){
					gulp.src('src/images/*.jpg')
					.pipe(gulp.dest('dist/images/'));
					gulp.src('src/images/*.png')
					.pipe(gulp.dest('dist/images/'));
					
				});
		
		//2.js语法错误报告
		/*gulp.task('jshint',function(){
		    gulp.src('js/*.js')
		    .pipe(jshint())
		    .pipe(jshint.reporter('gulp-jshint-html-reporter', { filename: 'error.html' })); // 输出错误的结果到自定义的html文件
		});
		*/
		/*//3.js代码的合并：将所有的js代码合并为一个文件
		gulp.task('alljs',function(){
			gulp.src('script/*.js')
			.pipe(concat('all.js'))//执行合并插件并且重新命名合并后的文件
			.pipe(gulp.dest('script/'));
		});*/
		
		//4.代码的合并压缩
		/*gulp.task('uglifyjs',function(){
			gulp.src('script/*.js')//引入路径
			.pipe(concat('all.js'))//执行合并插件并且重新命名合并后的文件
			.pipe(gulp.dest('script/'))//输出
			.pipe(rename('all.min.js'))//重命名
			.pipe(uglify())//压缩
			.pipe(gulp.dest('script/'));//输出
		});
*/