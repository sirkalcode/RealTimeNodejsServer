var express = require('express');
var rr = express();

var bodyParser = require('body-parser');
var cont = require('../controllers/test');

rr.use(bodyParser.json());
rr.use(bodyParser.urlencoded());

/* GET users listing. */
rr.get('/a', function(req, res) {
  res.send('what....');
});

rr.get('/',cont.showTest);

rr.get('/b', cont.showLoc);

rr.post('/c', cont.saveLoc);

rr.get('/d', cont.testsender);

rr.get('/e', cont.testrec);

module.exports = rr;
