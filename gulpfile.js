/**
 * @file gulpfile
 * @author leon <lupengyu@baidu.com>
 */

const gulp = require('gulp');

const EXAMPLE_PATH = 'Example/node_modules/react-native-baidu-voice-synthesizer';

gulp.task('js-to-example', function () {

    gulp
        .src('src/**/*.js')
        .pipe(gulp.dest(`${EXAMPLE_PATH}/src`));

});

gulp.task('example-to-src', function () {

    gulp
        .src(`${EXAMPLE_PATH}/ios/**/*`)
        .pipe(gulp.dest('ios'));

});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['js-to-example']);
    gulp.watch(`${EXAMPLE_PATH}/ios/**/*`, ['example-to-src']);
});
