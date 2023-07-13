const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
		mode: 'development',
    entry: './src/index.js',
    //donde vivira el projecto =>
    output: {
        path: path.resolve(__dirname, 'dist'),
        //nombre del enpaquetado que se va a crear
        filename: 'bundle.js',
        publicPath: '/',
    },
    //que extensiones se van a usar
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //Aqui trabajaremos las reglas que se crearan con los loaders y los plugins que agreguemos
    module: {
        rules: [
            //configuraciones necesarias dentro de objetos
            {
                //aqui le decimos con que tiene que trabajar
                test: /\.(js|jsx)$/,
                //aqui le decimos que no queremos que lea en este proyecto
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',

                ]
            },
            {
                //le decimos que trabaje con html
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    //nos permite agregar plugins que queremos usar
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    devServer: {
        historyApiFallback: true,
    }
}