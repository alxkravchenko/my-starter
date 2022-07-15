import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import formatHtml from 'gulp-format-html';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import config from '../config.js';

export const htmlBuild = () => (
    gulp.src(`${config.src.html}/*.html`)
        .pipe(fileInclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(gulpif(config.isProd, formatHtml({ indent_size: 4 })))
        .pipe(replace(/@img\//g, 'assets/images/'))
        .pipe(gulp.dest(config.dest.root))
);

export const htmlWatch = () => gulp.watch(`${config.src.html}/**/*.html`, htmlBuild);

