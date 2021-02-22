const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss to css
function style() {
  // scss directory
  return (
    gulp
      .src("./src/scss/**/*.scss")
      // pass that file through sass compiler
      .pipe(sass().on("error", sass.logError))
      // directory to save
      .pipe(gulp.dest("./src/css"))
      // stream changes to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
