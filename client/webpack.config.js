const path = require("path");



module.exports = {
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/"
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx", ".png", ".jpg", ".svg"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    performance: {
        hints: false
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        historyApiFallback: true,
        hot: true
    }
}