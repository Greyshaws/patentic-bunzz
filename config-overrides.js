// const webpack = require('webpack');

// module.exports = function override(config) {
//     const fallback = config.resolve.fallback || {};
//     Object.assign(fallback, {
//         "crypto": false,
//         "stream": false,
//         "http": false,
//         "https": false,
//         "url": false,
//         "zlib": false,
//         "buffer": false,
//         "assert": false,
//         "util": false

//     })
//     config.resolve.fallback = fallback;
//     config.plugins = (config.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             process: 'process/browser',
//             Buffer: ['buffer', 'Buffer']
//         })
//     ])
//     return config;
// }


// const webpack = require('webpack');

// module.exports = function override(config) {
//     const fallback = config.resolve.fallback || {};
//     Object.assign(fallback, {
//         "crypto": require.resolve("crypto-browserify"),
//         "stream": require.resolve("stream-browserify"),
//         "http": require.resolve("stream-http"),
//         "https": require.resolve("https-browserify"),
//         "url": require.resolve("url"),
//         "zlib": require.resolve("browserify-zlib"),
//         "buffer": require.resolve("buffer"),
//         "assert": require.resolve("assert"),
//         "util": require.resolve("util")

//     })
//     config.resolve.fallback = fallback;
//     config.plugins = (config.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             process: 'process/browser',
//             Buffer: ['buffer', 'Buffer']
//         })
//     ])
//     return config;
// }