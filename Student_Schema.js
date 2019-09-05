var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	StudentName : { type:String, required: true,unique:true},
	College : {type:String , required:true},
	Contact : {type:String, required:true},
	EmailId :{type:String, required:true , unique:true}
});
module.exports= mongoose.model ('Student',StudentSchema);
