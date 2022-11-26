const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var flightBookingSchema= new Schema({
    userId: {type: String, required: true},
    Start: {type: String, required: true},
    Dest: {type: String, required: true},
    Time: {type: String, required: true},
    Return:{type: String},
    Rate: {type: String, required: true},
    Count: {type: String},
 },
{
versionKey:false
});

const flightBookingModel = mongoose.model('flightbooking',flightBookingSchema)
module.exports = flightBookingModel;