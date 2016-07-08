module.exports = {
    js: {
        files: ["src/js/**/*.js"],
        tasks: ["eslint", "mochaTest"]
    },
    sass: {
        options: {
            livereload: false
        },
        files: ["src/scss/**/*.scss"],
        tasks: ['sasslint'],
    },
};
