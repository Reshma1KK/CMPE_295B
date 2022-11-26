const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var BookingSchema= new Schema({
    userId: {type: String, required: true},
    Name: {type: String, required: true},
    Start: {type: String, required: true},
    End: {type: String, required: true},
    Adult: {type: String},
    Children:{type: String},
    Bed: {type: String},
    Bath:{type: String},
    Rate: {type: String, required: true},
    RoomType: {type: String},
 },
{
versionKey:false
});

const BookingModel = mongoose.model('hotelrentalbooking',BookingSchema)
module.exports = BookingModel;