
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user   = require('./routes/user')
  , data   = require('./routes/data')
  , mobile = require('./routes/mobile')
  , http   = require('http')
  , path   = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/data/login', data.login);
app.post('/data/user' , data.user);

app.post('/auth/access_token', mobile.auth);
app.post('/attendance_time',   mobile.attendance_time);
app.post('/quitting_time',     mobile.quitting_time);


//START socket.io
// socket.io のパスが通らなかったので修正した
//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});

var server = http.createServer(app).listen(app.get('port'), function(){
console.log("Express server listening on port " + app.get('port'));
});
var io = require('socket.io').listen(server);
//END   socket.io


io.sockets.on('connection', function (socket) {
    //クライアント側からのイベントを受け取る。
    socket.on('msg send', function (msg) {
      msg={
        time : "10:00:00",
        msg : msg
      };
      //イベントを実行した方に実行する
      socket.emit('msg push me', msg);
      //イベントを実行した方以外に実行する
      socket.broadcast.emit('msg push', msg);
  });

  //接続が解除された時に実行する
  socket.on('disconnect', function() {
    log('disconnected');
  });
});

