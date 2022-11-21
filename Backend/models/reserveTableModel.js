const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reserveTableSchema = new Schema({
  guests:{
    type:String,
    required: true,
  },
  date:{
    type:String
  },
  time:{
    type:String
  },
  restaurantName:{
    type:String
  }
},
  {
    versionKey:false,
    timestamps:true
})


const ReserveTable = mongoose.model("ReserveTable",reserveTableSchema);
module.exports = ReserveTable;