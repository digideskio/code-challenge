module.exports = {
  entry: ['./app/react-entry.jsx'],

  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass',
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules'],
  },

  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './public',
  }
};
