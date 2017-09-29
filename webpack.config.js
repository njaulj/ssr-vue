const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const NODE_ENV = process.env["NODE_ENV"] ? process.env["NODE_ENV"] : 'dev'

var env = {
    dev: {
        entry: {
            index: ['./modules/index/index.js']
        },
        output: {
            filename: '[name].bundle.js',
            publicPath: '/static/',
            path: path.resolve(__dirname, './dist')
        },
        devtool: 'inline-source-map',
        plugins: [
            new CleanWebpackPlugin(['dist'])
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|svg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                              limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.min.js',
                jquery: 'jquery/dist/jquery.min.js'                
            }
        }
    },
    test: {

    },
    pro: {
        entry: ['./index.js'],
        output: {
            filename: 'index.bundle.js'
        },
        plugins: [
            new CleanWebpackPlugin(['index.bundle.js'])
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|svg|gif)$/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.min.js',
                jquery: 'jquery/dist/jquery.min.js'                            
            }
        }
    }
}

module.exports = env[NODE_ENV]