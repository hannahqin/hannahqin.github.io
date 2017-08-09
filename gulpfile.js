var gulp = require('gulp');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
        // adding json data to nunjucks
        .pipe(data(function() {
            return require('./app/images.json')
        }))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('.'))
});