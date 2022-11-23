const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var hotelSchema= new Schema({
    Name: {type: String, required: true},
    Location: {type: String, required: true},
    Description: {type: String, required: true},
    Rate: {type: String, required: true},
    Pic:{type: String},
    Address: {type: String, required: true},
},
{
versionKey:false
});

const hotelModel = mongoose.model('hotel', hotelSchema);
module.exports = hotelModel;