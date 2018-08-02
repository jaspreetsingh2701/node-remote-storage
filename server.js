var express = require('express'), fs = require('fs'), app = express();
 
var app = express();
 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
 
app.get('/', function(req, res) {
    res.send('Hello from NodeJS  at '+ new Date());
});
 
 
app.listen(8095, ip, function() {
	console.log("Listening on ");
});
 
module.exports = app;


// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// app.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });