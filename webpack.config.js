const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports ={
    /*** 基础配置start****/
    entry:{
        //webpack要搜索main.js 进行打包
        app:'./app/js/main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module:{
        loaders:[{
            test:/\.html$/,
            loader:'html-loader'
        },{
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.scss$/,
            loader:'style-loader!css-loader!scss-loader'   //从右往左调用
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),   //根目录
        }),
        new HtmlWebpackPlugin({
            template:'./app/views/index.html'
        })
    ],
    output:{
        filename:'[name].min.js',
        path:path.resolve(__dirname,'dist')
    }
    /*** 基础配置end****/

}