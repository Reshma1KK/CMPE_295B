const router = require ("express").Router();
var TableBookings = require("../models/reserveTableModel")

console.log("here for restaurant")

router.get("/:id", (req,res) =>{
  console.log("request body", req.params)
  TableBookings.find({userId: req.params.id} ,function(err, docs){
    if(err){
      console.log("error",err);
      res.status(500).send(err);
      return err;
    }
    else{
      console.log("booked tables")
      console.log(docs);
      res.status(200).send(docs);
      return docs;
    }
  })
})


module.exports = router;