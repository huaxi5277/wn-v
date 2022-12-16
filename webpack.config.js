const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader/dist/index')
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },


    // webpack-dev-server
    devServer: {
        hot: true,
        port: 8090
    },

    // 给文件起别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, './src/css'),
            '@img': path.resolve(__dirname, './src/img'),
            '@components': path.resolve(__dirname, './src/vue/components')
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },

            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            // webpack 5
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)/,
                type: "asset",
                generator: {
                    filename: 'img/[name].[hash:6].[ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "lx-vue"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
