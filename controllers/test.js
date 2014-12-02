// var express = require('express');
var School = require('../models/school');
var Location = require('../models/location');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'sender!!!!!' });
// });

// router.get('/users',function(req, res){
// 	res.render('dashboard',{title: 'Dashboard!!!!!!!'});
// });


// router.get('/data',function(req,res){
// 	var school = new School({SchoolName: "tgrtge", Address: "1234 street", 
// 							 City: "sudbury", State: "Ma", Zip:"324"});
//     school.save(function(err){
//     	if (err)
//     	{
//     		console.log('error saving: %s',err);
//     	}
//     	else
//     	{
//     		res.send(school.find);
//     	}
//     });

//     var location = new Location({Lat: "36.46587387",Long: "-43.5435436546"});

//     location.save(function(err){
//         if(err)
//         {
//             console.log('Error saving location data.');
//         }
//         else
//         {
//             res.send(location.find);
//         }
//     });

// });

// router.get('/showdb',function(req,res){
// 	res.send(Location.find);
// });

// router.get('/rem/:id',function(req,res){
//     var school = School.find({_id: req.params.id});
//     school.remove(function(err){
//         if(err)
//         {
//             res.render('dashboard',{title:'error removing school'});
//         }
//         else
//         {
//             res.render('index',{title:'Successfully removed school'});
//         }
//     });
// });

// module.exports = router;



exports.saveLoc = function(req,res){
    var location = new Location({Lat: "22.3454",Long: "32.42324465"});
    location.save(function(err){
        if(err)
        {
            console.log('error SAVING!!!!!!!!!!!!!!!!!!');
        }
        else
        {
            // Location.find({},function(err,locs){
            //     if(err)
            //     {
            //         res.send(500);
            //     }
            //     else
            //     {
            //         res.send(locs);
            //     }
            // });
            res.redirect('/b');
        }
    });
    
};

exports.showLoc = function(req,res){
    console.log('AAAAAAAAAAAAAA');
    Location.find({},function(err, locs){
        if(err)
        {
            res.send(500);
        }
        else
        {
            //res.send(200);
            res.send(locs);
        }
    });
    
};

module.exports.showTest = function(req,res){
    console.log('YYYYYYYYYYY');
};

exports.testrec = function(req,res){
    res.render('dashboard', { title: 'sender!!!!!' });
};

exports.testsender = function(req,res){
    res.render('index', { title: 'sender!!!!!' });
};