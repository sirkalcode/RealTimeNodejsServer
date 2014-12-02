var mongoose = require('mongoose'),
		  fs = require('fs'),
		  path = require('path');

mongoose.connect('mongodb://localhost:27017/tracker',function(err){
	if(err)
	{
		console.log('Error connecting to database: %s', err);
	}
	else
	{
		console.log('Successfully connected to the database.');

		fs.readdirSync(path.resolve('.') + '/models').forEach(function(filename){
			if(~filename.indexOf('.js')) require(path.resolve('.') +'/models/'+filename);
		});
	}

});