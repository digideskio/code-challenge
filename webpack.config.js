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
        test: [/\.scss$/, /\.css$/],
        loader: 'style!css!sass',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
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
