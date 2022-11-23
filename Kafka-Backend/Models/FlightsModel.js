const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var flightsSchema= new Schema({
    Name: {type: String, required: true},
    Start: {type: String, required: true},
    Dest: {type: String, required: true},
    Time: {type: String, required: true},
    Return:{type: String},
    Rate: {type: String, required: true},
 },
{
versionKey:false
});

const flightsModel = mongoose.model('flight', flightsSchema);
module.exports = flightsModel;