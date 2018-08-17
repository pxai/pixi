const gulp = require("gulp");
const del = require("del");
const connect = require("gulp-connect");
const browserify = require("browserify");
const source = require("vinyl-source-stream");

gulp.task('clean', function(){
     return del('static/**/*', {force:true});
});

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
        port: 3000
    });
});

gulp.task("html", function () {
    gulp.src("./src/assets/html/index.html")
        .pipe(gulp.dest("./static/"))
        .pipe(connect.reload());
});

gulp.task("assets", function () {
    gulp.src(["./src/assets/**/*","!./src/assets/html","!./src/assets/html/index.html"])
        .pipe(gulp.dest("./static/assets"))
        .pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch(["./src/html/**/*.html","./src/**/*.js","gulpfile.js"], ["clean", "html", "assets", "bundle"]);
});

gulp.task("default", [ "clean", "html", "assets", "bundle", "server", "watch" ]);
