const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantName:{
    type:String,
    required:true
  },
  starRating:{
    type:Number
  },
  address:{
    type:String
  },
  dollarRating:{
    type:String
  },
  phone:{
    type:String
  },
  picture:{
    type:String
  },
  priceRange:{
    type:String
  },
  location:{
    type:String
  },
},
  {
    versionKey:false,
    timestamps:true
})


const Restaurant = mongoose.model("Restaurant",restaurantSchema);
module.exports = Restaurant;