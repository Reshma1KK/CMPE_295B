const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var vacationRentalsSchema= new Schema({
    Name: {type: String, required: true},
    Location: {type: String, required: true},
    Type: {type: String, required: true},
    Description: {type: String, required: true},
    Bedroom:{type: String, required: true},
    Bathroom: {type: String, required: true},
    Rate: {type: String, required: true},
    Pic:{type: String},
},
{
versionKey:false
});

const vacationRentalModel = mongoose.model('vacationRental', vacationRentalsSchema);
module.exports = vacationRentalModel;