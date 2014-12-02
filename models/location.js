var mongoose = require('mongoose'),
    Schema =  mongoose.Schema,
    ObjectId = Schema.ObjectId;

var locationSchema = new Schema({
	Lat: String,
	Long: String,
	DateTime:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Location', locationSchema);