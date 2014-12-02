var mongoose = require('mongoose'),
   Schema= mongoose.Schema,
   ObjectId = Schema.ObjectId;

var schoolSchema = new Schema({
	SchoolName: String,
	Address: String,
	City: String,
	State: String,
	Zip: String
});

schoolSchema.path('SchoolName').validate(function(schoolName){
	return schoolName.length > 0
}, 'School Name cannot be blank');

module.exports = mongoose.model('School', schoolSchema);