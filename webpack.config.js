let path = require('path');
let webpack = require('webpack');

module.exports = {
    // input
    entry: './src',

    // output
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    // transformations
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: ['env'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
        ]
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
};