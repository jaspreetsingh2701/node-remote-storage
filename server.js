// var express = require('express'), fs = require('fs'), app = express();
 
// var app = express();
 
// var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8095;
 
// app.get('/', function(req, res) {
//     res.send('Hello from NodeJS  at '+ new Date());
// });
 
 
// app.listen(server_port, server_ip_address, function() {
// 	console.log("Listening on " + server_ip_address + ", port " + server_port);
// });
 
// module.exports = app;

var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});