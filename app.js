var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var routes = require('./routes/index');
// var users = require('./routes/users');
//var controllertest = require('./controllers/test');
//var mongoose = require('mongoose');
// require('./config/db');
var routes = require('./config/routes');
var fs = require('fs');

var app = express();

// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// server.listen(8045);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
//app.use(express.methodOverride());

// app.use('/users', users);
//app.use('/', das);
app.use('/', routes);

// app.use('/aa', function(req,res){
//     res.send('OK Get');
// });


// app.post('/xyz', function(req,res){
//     //res.send('OK POST');
//     res.redirect('/aa');
// });

// /// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// mongoose.connect('mongodb://localhost:27017/tracker',function(error){
//     if (error)
//     {
//         console.log('Error connecting to mongodb://localhost:27017/tracker database');
//     }
//     else
//     {
//         console.log('Successfully connected to tracker database');
//     }
// });


// fs.readdirSync(__dirname + '/models').forEach(function(filename){
//     if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
// });


// io.on('connection', function(socket){
//     console.log('a user connected');
         
//     socket.on('message', function (msg) {
//         console.log('Got Message: ' + msg);
//         io.emit('pageview', { 'url': msg });
//     });

// });



/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    console.log('in development');
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
