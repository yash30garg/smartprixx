module.exports={
    entry: './index.js',
    output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
    },
    module:{
    rules: [
    {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
    }
    ]
    }
    } 