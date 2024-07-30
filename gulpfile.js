import { dest, src, watch } from "gulp";
//con ESM se tiene que jugar con los nombres
import sass from "gulp-sass";
import * as sassP from 'sass';
const sassCompiler = sass(sassP);

//Postcss y Autoprefixer
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

//Minificar Imagenes
import imagemin, { optipng } from "gulp-imagemin";
// import gulpAvif from 'gulp-avif';
import gulpAvif from 'gulp-avif';

export function css(done) {
  src('src/scss/app.scss')
    .pipe(sassCompiler({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css'))
  done();
}

// export function imgs(done) {
//   src('src/img/**/*')
//     // .pipe(imagemin())
//     .pipe(dest('build/img'))
//   done();
// }

// export function imgsAvif(done) {
//   src('src/img/**/*.jpg')
//     .pipe(gulpAvif())
//     .pipe(dest('build/img'))
//   done();
// }

export function dev() {
  watch('src/scss/**/*.scss', css);
  // watch('src/img/**/*', imgs);
}
