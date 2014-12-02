var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var busSchema = new Schema({
	DriverName: String,
	Registration: String,
	Color: String
});

module.exports = mongoose.model('Bus', busSchema);