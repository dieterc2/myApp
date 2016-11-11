var express = require('express');
var path = require('path');

var app = express();

var isProd = process.env.NODE_ENV === 'production';
var port = isProd ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(port, function() {
    console.log('Server running on port ' + port);
});
