"use strict";
exports.__esModule = true;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var defineConfig = require('@vue/cli-service').defineConfig;
var path = require("path");
module.exports = defineConfig({
    pwa: {
        name: 'Pastolatarnia',
        themeColor: '#00647D',
        appleMobileWebAppCapable: 'yes',
        workboxPluginMode: 'GenerateSW'
    },
    configureWebpack: {
        devServer: {
            historyApiFallback: true
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                '>>': path.resolve(__dirname, 'public/')
            }
        }
    },
    devServer: {
        port: 2137,
        host: ''
    }
});
