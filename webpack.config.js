const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'index_bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'bundle'), // Replaces 'contentBase'
        port: 3000,
        hot: true // Enable Hot Module Replacement
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/, // Matches all .css files
                use: ['style-loader', 'css-loader'] // Processes CSS files
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'] // Resolve both .js and .jsx extensions
    }
};
