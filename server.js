import express from 'express';
import webpack from 'webpack';

const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);
