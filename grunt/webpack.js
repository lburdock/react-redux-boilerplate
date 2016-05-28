var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    hash: true,
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    dist: {
        entry: "./src/js/app.js",
        output: {
            path: "./dist",
            filename: "app.min.js"
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ],
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-redux": "ReactRedux",
            "redux": "Redux"
        },
        plugins: [HTMLWebpackPluginConfig]
    }
};
