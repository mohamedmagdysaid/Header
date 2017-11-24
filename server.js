// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require("operatingsystem");
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
var port = process.env.PORT || 5000
app.set('port',port);
var info = os.current();
 

app.get('/',function(req,res){
  

  var ip = req.headers['x-forwarded-for'].split(",")[0];
  var lan = req.headers["accept-language"].split(",")[0];
  var software=req.headers['user-agent'].split(') ')[0].split(' (')[1];
  
  var info = {"ipaddress":ip,"Language":lan,"operating system":software}
  res.send(info);
});

app.listen(port);
