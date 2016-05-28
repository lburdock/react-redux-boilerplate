module.exports = {
    dist: {
        options: {
            style: "compressed",
            lineNumbers: true
        },
        files: [{
            expand: true,
            cwd: "src/scss",
            src: ["**/*.scss"],
            dest: "dist",
            ext: ".css"
        }]
    }
};
