// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
var port = process.env.PORT || 5000
app.set('port',port);
app.get('/',function(req,res){
  var ip = req.connection.remoteAddress;
  ip = ip.split(":")
  res.send({"IP Address":ip[3]});
  console.log(ip[3]);
});

app.listen(port);
