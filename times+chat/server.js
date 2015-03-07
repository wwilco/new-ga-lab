//times+chat
//chat app server
var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3000});
var connections = [];

console.log('listening on port 3000 from chat server');

//removes a specific ws connection from
//the connections array
var deleteWS = function(websocket) {
  for(var i=0; i< connections.length; i++) {
    var c = connections[i];
    if (c === websocket) {
      //delete this ws from the connections array
      connections.splice(i, 1);
    }
  }
}

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log(message);
    connections.forEach(function(elem) {
      if (elem !== ws) {
        elem.send(message);
      }
    })
  });

  ws.on('close', function() {
    deleteWS(ws);
    console.log('client closed');
  })

  console.log('client connected');
  connections.push(ws);
});

//allow the server to send messages too
process.stdin.on('data', function (data) {
  var msg = data.toString().trim();

  connections.forEach(function(elem) {
    elem.send(msg);
  })
});

//ajax call server

var express = require('express');
var request = require('request');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/'));

var url = "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=";
app.get("/news", function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
      console.log("server function is on");
    }
  });
});

console.log("listening on 4000 from ajax")
app.listen(4000);
