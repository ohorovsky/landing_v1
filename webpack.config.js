var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './js');
var STYLE_DIR = path.resolve(__dirname, './less');
// var STYLE_DIR_TIMEPICKER = path.resolve(__dirname, './less-timepicker');
// var STYLE_DIR_SURVEY = path.resolve(__dirname, './less-survey');
// var STYLE_DIR_DATEPICKER = path.resolve(__dirname, './less-datepicker');
// var STYLE_DIR_DROPDOWN = path.resolve(__dirname, './less-dropdown');
// var STYLE_DIR_LANDING = path.resolve(__dirname, './less-landing');
// var STYLE_DIR_UTOPIANS = path.resolve(__dirname, './less-utopians');


module.exports = {
    entry: ["babel-polyfill", "./app/js"]
};

var config = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        publicPath: '/'
    },
    entry:{
        app : APP_DIR + '/index.js',
        // timepicker : APP_DIR + '/timepicker.js',
        // timepicker_elements : APP_DIR + '/timepicker-elements.js',
        // survey : APP_DIR + '/survey-ondrej.js',
        // dropdown : APP_DIR + '/dropdown.js',
        // datepicker : APP_DIR + '/datepicker.js',
        // datepicker_no_date : APP_DIR + '/datepicker-no-date.js',
        // landing : APP_DIR + '/landing.js',
        // utopians : APP_DIR + '/utopians.js',
        styles: STYLE_DIR + '/main.less',
        // styles_timepicker: STYLE_DIR_TIMEPICKER + '/main.less',
        // styles_survey: STYLE_DIR_SURVEY + '/main.less',
        // styles_dropdown: STYLE_DIR_DROPDOWN + '/main.less',
        // styles_datepicker: STYLE_DIR_DATEPICKER + '/main.less',
        // styles_landing: STYLE_DIR_LANDING + '/main.less',
        // styles_utopians: STYLE_DIR_UTOPIANS + '/main.less'
    
    },
    
    module : {

        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    },
                }
            },
            
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',

            },

          


            {
                test: /\.css$/,
                //include: [STYLE_DIR_TIMEPICKER,STYLE_DIR, STYLE_DIR_SURVEY],
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'style!css?url=false!less',
                    'postcss-loader'
                ]
            },
            
          

       
        
        {
            test: /\.less$/,
            include: [STYLE_DIR],
            use: extractLess.extract({
                use: [{
                    loader: "css-loader",
                    options: { url: false }
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        },
        
        {
              test: /\.(png|svg|jpe?g|gif)$/i,
              use: [
                'file-loader?name=[path][name].[ext]',             //this will keep file names and dir same in build
                'image-webpack-loader'                             //optimising images
              ]
          }
           

        ]
    },
    plugins: [
       extractLess
    ],
    output: {
        path: BUILD_DIR,
        filename: "[name].js"

    }
};

module.exports = config;

