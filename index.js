// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
//Set trust proxy to obtain the ip address
app.set('trust proxy',true);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/whoami',function(req,res){
  console.log(JSON.stringify(req.ip))
  console.log(JSON.stringify(req.headers['accept-language']));
  console.log(JSON.stringify(req.headers['user-agent']));

  var ip = req.ip.toString();
  var lang = req.headers['accept-language'].toString();
  var software = req.headers['user-agent'].toString();

  res.json({ipadress: ip,language: lang,software: software});

});
