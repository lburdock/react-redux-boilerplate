module.exports = {
    app: {
        src: ["tests/js/**/*.js"],
        options: {
            require: [ "babel-core/register" ]
        }
    }
};
