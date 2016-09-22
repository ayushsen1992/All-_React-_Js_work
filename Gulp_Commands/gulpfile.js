//adding all requirement plugin using require
//Includes Gulp and jshint plugins
var gulp=require('gulp');
var jshint=require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat= require('gulp-concat');
var stripDebug =require('gulp-strip-debug');
var uglify =require('gulp-uglify');
var react=require('gulp-react');
//var htmlreplace = require('gulp-html-replace');



gulp.task('scripts',function(){

gulp.src(['./src/scripts/example.js'])
.pipe(react().on('error',function(e){
  console.log(e);
}))
.pipe(concat('script.js').on('error', function(e){   //on error we got info where is error
            console.log(e);
         }))//add whole code in script.js
.pipe(stripDebug().on('error', function(e){   //on error we got info where is error
            console.log(e);
         }))//remove console.log and debugger

.pipe(uglify().on('error', function(e){   //on error we got info where is error
            console.log(e);
         }))
.pipe(gulp.dest('./build/scripts/')); //at last writing file to destination
});

// .pipe(stripDebug())




gulp.task('jshint',function(){
//
gulp.src('./src/scripts/.*js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'));


});


//******another task


// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
//++++++++++++++
// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});
