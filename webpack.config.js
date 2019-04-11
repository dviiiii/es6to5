
module.exports = {
    entry: './src/test1.js',
    output: {
        filename: './js/bundle.js'
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}