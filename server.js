var app = require("express").createServer();
app.listen(8000);
var webRTC = require('webrtc.io').listen(app);


app.get('/', function(req, res) {
      res.sendfile(__dirname + '/index.html');
});
app.get('/p2p.html', function(req, res) {
      res.sendfile(__dirname + '/p2p.html');
})

app.get('/css/bootstrap.css', function(req, res) {
      res.sendfile(__dirname + '/css/bootstrap.css');
});
app.get('/css/style.css', function(req, res) {
      res.sendfile(__dirname + '/css/style.css');
});

app.get('/js/qr.js', function(req, res) {
      res.sendfile(__dirname + '/js/qr.js');
});
app.get('/js/bootstrap.js', function(req, res) {
      res.sendfile(__dirname + '/js/bootstrap.js');
});

app.get('/js/jquery.qrcode.min.js', function(req, res) {
      res.sendfile(__dirname + '/js/jquery.qrcode.min.js');
});
app.get('/js/jquery.js', function(req, res) {
      res.sendfile(__dirname + '/js/jquery-1.8.0.min.js');
});

app.get('/webrtc.io.js', function(req, res) {
      res.sendfile(__dirname + '/webrtc.io.js');
});

