module.exports = {
  entry:'./public/js/entry.js',
  output:{
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
          }
        ]
    },
}
