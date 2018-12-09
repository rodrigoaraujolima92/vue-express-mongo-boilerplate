// REQUIREMENTS
require('dotenv').config();
const path = require("path");
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// CONSTANTS
// path to sources (js and hbs)
const distroSourcePath = "./Client/Build/js";
// path where the compiled files should be saved
const distroResourcePath = "./Client/Resources/Public/js/";

// name of the 'main' file
const mainFileName = "index.js";

let defaultUglifyJSPlugin = new UglifyJSPlugin({
    /* enable parallelization (recommended) */
    parallel: true,
    /* enable caching (recommended) */
    cache: true,
    /* enable for sourcemaps */
    sourceMap: true,
    /* more options */
    uglifyOptions: {
        /* enable to get some warnings from the plugin; WILL POLLUTE THE LOG, USE WITH CARE */
        // warnings: (process.env.ENV === "dev") ? true : false,
        /* enable to shorten var and function names */
        mangle: (process.env.ENV === "dev") ? false : true,
        output: {
            /* enable to make your code readable again */
            beautify: (process.env.ENV === "dev") ? true : false,
        }
    }
});
let defaultNoEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

// MAIN CONFIG
module.exports = [
    // index.js
    {
        devtool: (process.env.ENV === "dev") ? 'eval' : false,
        entry: [
            'babel-polyfill',
            `${distroSourcePath}/${mainFileName}`
        ],
        output: {
            filename: mainFileName,
            path: path.resolve(__dirname, distroResourcePath)
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, `${distroSourcePath}/js/`)
                    ],
                    loader: 'babel-loader?cacheDirectory=true'
                },
                {
                    test: /\.scss$/,
                    use: [

                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: `postcss-loader`,
                        },
                        {
                            loader: 'sass-loader',
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    path.resolve(__dirname, 'Client/Build/scss/variables/_variables.scss'),
                                    path.resolve(__dirname, 'Client/Build/scss/mixins/_mixins.scss')
                                ]
                            }
                        }
                        
                    ]
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'Client/Build/js/components')
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            defaultUglifyJSPlugin,
            defaultNoEmitOnErrorsPlugin
        ]
    }
];