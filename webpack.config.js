const path = require('path'); 
// we need absolute directory for our output
// resolve method comes with path that accepts two arguments
module.exports = {  
entry: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }
        ]
    }
};
// the above spins up a local server port 3000 with webpack 
// changes are reflected immediately with Webpack dev server