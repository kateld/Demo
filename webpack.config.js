/**
 * Created by liudan on 2017/5/10.
 */
module.exports = {
    entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
   module:{
        loaders:[{
            test:/\.json$/,
            loader:"json-loader"
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        },{
            test:/\.css$/,
            loader:'style-loader!css-loader?modules'
        }
        ]
    },
    devServer:{
        contentBase:"./public" ,//本地服务器所加载的页面所在的目录
        colors:true,
        historyApiFallback:true,
        inline:true//实时刷新
    }
}