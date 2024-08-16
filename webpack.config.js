const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/firebase.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundl.js'
    }
};