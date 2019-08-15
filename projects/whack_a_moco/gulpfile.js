const os = require('os');
const gulp = require("gulp");
const del = require("del");
const connect = require("gulp-connect");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const open = require('gulp-open'); 

const browser = os.platform() === 'linux' ? 'chromium' : (
    os.platform() === 'darwin' ? 'google chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'firefox'));

function openBrowser () {
    return gulp.src("/")
    .pipe(open({uri: "http://localhost:3000"}));
}

function clean () {
     return del(['static/**','!static']);
}

async function bundle () {
    browserify({ debug: true })
        .add("src/index.js")
        .bundle()
        .on("error", function(err){
            console.log(err.message); // eslint-disable-line no-console
        })
        .pipe(source("index.js"))
        .pipe(gulp.dest("./static/"))
        .pipe(connect.reload());

}

function server () {
    connect.server({
        root: "static",
        livereload: true,
        port: 3000
    });
}

function html () {
    return gulp.src("./src/assets/html/index.html")
        .pipe(gulp.dest("./static/", {force:true, overwrite: true}))
        .on("error", function(err){
            console.log("HTML: ",err.message); // eslint-disable-line no-console
        })
        .pipe(connect.reload());
}

function assets () {
    return gulp.src(["./src/assets/**/*","!./src/assets/html"])
        .pipe(gulp.dest("./static/assets", {force:true}))
        .on("error", function(err){
            console.log("assets: ",err.message); // eslint-disable-line no-console
        })
        .pipe(connect.reload());
}

function watch () {
    gulp.watch(["./src/assets/**/*","./src/**/*.js","gulpfile.js"], gulp.series(clean, html, assets, bundle)).on("error", function(err){
        console.log("wa tch: ",err.message); // eslint-disable-line no-console
    });
}

exports.default =  gulp.series(clean, html, assets, bundle, gulp.parallel(openBrowser, server, watch) );