'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './simple/home',
    output: {
        filename: 'build.js',
        library: 'home'
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 50
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

};