var gulp = require('gulp');
    uglify = require('gulp-uglify');
//    rename = require('gulp-rename');  //John added this during video, but causes issues if more than one js file
    minifyCSS = require ('gulp-minify-css');
    jshint = require('gulp-jshint');
    imagemin = require ('gulp-imagemin');
    serve = require ('gulp-serve');
    critCSS = require ('gulp-critical-css');


gulp.task('default', ['scripts', 'styles', 'lint', 'minImg', 'critCSS'], function(){  //add task ('serve') when coding completed

});

gulp.task('scripts', function(){
        gulp.src('js/*.js')
        .pipe(uglify())
//        .pipe(rename('app.min.js'))  //this file name causes trouble if there is more than one js file
        .pipe(gulp.dest('js/'));

});

gulp.task('styles', function(){
    gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('minCSS'));
});

    //when ready for production tests, add watch to update whenever there is a change-leaves process open, close with Ctrl C
// gulp.task('watch', function(){
//     gulp.watch('js/*.js', ['scripts']);
//     gulp.watch('css/*.css', ['styles']);
//});

gulp.task('lint', function(){
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('js/'));
});

gulp.task('minImg', function(){
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img/'));
});

//gulp.task('serve', function(){  //follow-up - this function is different from rest, which operate on file from source and move to dest

//  }
//});

gulp.task('critCSS', funtion(){
   gulp.src('src/style.css')
       .pipe(criticalCss())
       .pipe(gulp.dest('dist'))
 }
});
