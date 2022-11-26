const router = require ("express").Router();
var HotelBookings = require("../models/hotelRentalsModel")

console.log("here for restaurant")

router.get("/:id", (req,res) =>{
  console.log("request body", req.params)
  HotelBookings.find({userId: req.params.id} ,function(err, docs){
    if(err){
      console.log("error",err);
      res.status(500).send(err);
      return err;
    }
    else{
      console.log("booked hotels")
      console.log(docs);
      res.status(200).send(docs);
      return docs;
    }
  })
})


module.exports = router;