var mongoose = require('mongoose');


//mongoose.connect('mongodb+srv://dpreid:david@cluster0-shwwy.azure.mongodb.net/test');
//mongoose.connect('mongodb+srv://dpreid:david@cluster0-shwwy.azure.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/UnityTestDatabase');

var Schema = mongoose.Schema;

//the User class will have a name and result properties
var userSchema = new Schema({
	name: {type: String, required: true, unique: true},
	result: [Number]
    });


// output the Person class
module.exports = mongoose.model('User', userSchema);


userSchema.methods.standardizeName = function() {
    this.name = this.name.toLowerCase();
    return this.name;
}
