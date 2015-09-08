var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	firstName:{
		type:String,
		index:true,
		required:true
	},
	lastName:{
		type:String,
		index:true,
		required:true
	},
	city:{
		type:String,
		index:true
		
	},
	stateCode:{
		type:String,
		index:true
		
	},
	countryCode:{
		type:String,
		index:true
		
	}
});

var Article = module.exports = mongoose.model('Article',articleSchema);
module.exports.getArticles = function(callback){
	Article.find(callback);

}
// Get data By ID
module.exports.getDataById = function(id, callback){
	data.findById(id, callback);
}