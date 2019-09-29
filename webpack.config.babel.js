const config = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                // test: /\.(css|scss)$/,
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        compress: true,
        open: true
    }
};

module.exports = config;