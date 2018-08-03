const gulp = require("gulp");
const connect = require("gulp-connect");
const browserify = require("browserify");
const source = require("vinyl-source-stream");

gulp.task("bundle", async function () {
    browserify({ debug: true })
        .add("src/index.js")
        .bundle()
        .on("error", function(err){
            console.log(err.message); // eslint-disable-line no-console
        })
        .pipe(source("index.js"))
        .pipe(gulp.dest("./static/"))
        .pipe(connect.reload());

});

gulp.task("server", function() {
    connect.server({
        root: "static",
        livereload: true,
        port: 8080
    });
});

gulp.task("html", function () {
    gulp.src("./resources/html/index.html")
        .pipe(gulp.dest("./static/"))
        .pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch(["./src/html/**/*.html"], ["html"]);
    gulp.watch(["./src/**/*.{js}"], ["bundle"]);
});

gulp.task("default", [ "html", "bundle", "server", "watch" ]);
