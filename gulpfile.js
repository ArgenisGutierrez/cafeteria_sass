import { dest, src, watch } from "gulp";
import sass from "gulp-sass";
import * as sassP from 'sass';
const sassCompiler = sass(sassP);
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

export function css(done) {
  src('src/scss/app.scss')
    .pipe(sassCompiler({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css'))
  done();
}

export function dev() {
  watch('src/scss/**/*.scss', css);
}
