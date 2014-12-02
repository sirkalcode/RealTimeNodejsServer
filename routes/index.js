// var express = require('express');
// var School = require('../models/school.js');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'sender!!!!!' });
// });

// router.get('/users',function(req, res){
// 	res.render('dashboard',{title: 'Dashboard!!!!!!!'});
// });


// router.get('/data',function(req,res){
// 	var school = new School({SchoolName: "loring", Address: "1234 street", 
// 							 City: "sudbury", State: "Ma", Zip:"324"});
//     school.save(function(err){
//     	if (err)
//     	{
//     		console.log('error saving: %s',err);
//     	}
//     	else
//     	{
//     		res.send(200);
//     	}
//     });
// });

// router.get('/showdb',function(req,res){
// 	res.send(Location.find);
// });

// module.exports = router;
