const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thingsToDoSchema = new Schema({
  about:{
    type:String,
    required: true
  },
    age:{
    type:String
  },
  cost:{
    type:String
  },
  duration:{
    type:String
  },
  name:{
    type:String
  },
  reviews:{
    type:String
  },
  location:{
      type:String
  },
  start_dates:{
    type:String
  },
  image:{
    type:String
  }
},
  {
    versionKey:false,
    timestamps:true
})


const ThingsToDo = mongoose.model("ThingsToDo",thingsToDoSchema);
module.exports = ThingsToDo;