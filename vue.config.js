const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    baseUrl            : process.env.NODE_ENV === 'production' ? '' : './',
    // outputDir:'cordova-merge-client/www/www',
    lintOnSave         : true,
    productionSourceMap: false,
    chainWebpack       : (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@common', resolve('src/common'))
            .set('@components', resolve('src/components'))
            .set('@router', resolve('src/router'))
            .set('@config', resolve('src/config'))
            .set('@store', resolve('src/store'))
            .set('@service', resolve('src/service'))
            .set('@utils', resolve('src/utils'))
    }
}
