const path = require('path');
require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const historyApiFallback = require('connect-history-api-fallback');


const isDeveloping = process.env.NODE_ENV !== 'production';
console.log(isDeveloping);
const port = isDeveloping ? 3000 : process.env.PORT;
console.log(port);
const app = express();


if (isDeveloping) {
  const compiler = webpack(config);
  app.use(historyApiFallback({
    verbose: false,
  }));
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
} else {
  app.use(express.static(__dirname + '/'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
