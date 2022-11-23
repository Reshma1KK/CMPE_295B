const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var userSchema= new Schema({
    Email: {type: String, required: true},
    Pwd: {type: String, required: true},
},
{
versionKey:false
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;