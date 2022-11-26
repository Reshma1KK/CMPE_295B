const router = require ("express").Router();
var FlightBookings = require("../models/flightBookingModel")

console.log("here for restaurant")

router.get("/:id", (req,res) =>{
  console.log("request body", req.params)
  FlightBookings.find({userId: req.params.id} ,function(err, docs){
    if(err){
      console.log("error",err);
      res.status(500).send(err);
      return err;
    }
    else{
      console.log("booked Flight")
      console.log(docs);
      res.status(200).send(docs);
      return docs;
    }
  })
})


module.exports = router;