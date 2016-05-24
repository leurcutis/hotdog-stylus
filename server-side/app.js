//requires
var express = require('express');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var router = express.Router();

// required routes
var garment_router = require('./routes/garment_routes.js');
var outfit_router = require('./routes/outfit_routes.js');
var user_router = require('./routes/user_routes.js');

var db = require('./db.js');

// cross-domain fixer
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.use('/api/garments', garment_router);
app.use('/api/outfits', outfit_router);
app.use('/api/users', user_router);

// root route
app.get('/', function(req, res) {
  res.json({message: 'hello, suckas. welcome to HOTDOG STYLUS'});
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
