module.exports = {
    js: {
        files: ["src/js/**/*.js"],
        tasks: ["eslint", "test", "webpack"]
    },
    sass: {
        options: {
            livereload: false
        },
        files: ["src/scss/**/*.scss"],
        tasks: ["sass"]
    }
};
