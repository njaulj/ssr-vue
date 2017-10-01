const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FastUglifyJsPlugin = require('fast-uglifyjs-plugin')

const NODE_ENV = process.env["NODE_ENV"] ? process.env["NODE_ENV"] : 'dev'

var env = {
    dev: {
        entry: {
            index: './modules/index/index.js'
        },
        output: {
            filename: '[name].bundle.js',
            publicPath: '/static/',
            path: path.resolve(__dirname, 'dist')
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
                              limit: 8
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
            },
            extensions: ['.vue', '.js', '.css']            
        }
    },
    test: {

    },
    pro: {
        entry: {
            index: './modules/index/index.js'
        },
        output: {
            filename: '[name].bundle.js',
            publicPath: '/static/',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['index.bundle.js']),
            new FastUglifyJsPlugin({
                compress: {
                    warnings: false
                },
                // debug设为true可输出详细缓存使用信息:
                debug: true,
                // 默认开启缓存，提高uglify效率，关闭请使用:
                cache: false,
                // 工作进程数，默认os.cpus().length
                workerNum: 2
            })
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
            },
            extensions: ['.vue', '.js', '.css']
        }
    }
}

module.exports = env[NODE_ENV]