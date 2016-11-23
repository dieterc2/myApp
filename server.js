import express from 'express';
import webpack from 'webpack';
import path from 'path';

const config = require('./webpack.config.js');

const port = 3000;

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
