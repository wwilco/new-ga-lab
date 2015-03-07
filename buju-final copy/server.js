var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

var url = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=0c446e47b3a7f6ed45dbc12101701c5a:13:71271148";
app.get("/news", function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
      console.log("server function is on");
    }
  });
});

console.log("listening on 3000")
app.listen(3000);
