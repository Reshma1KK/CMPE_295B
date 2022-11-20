const router = require ("express").Router();
var Restaurant = require("../models/restaurantModel")

console.log("here 1")

router.get("/", (req,res) =>{
  console.log("here")
  Restaurant.find({} ,function(err, docs){
    if(err){
      console.log(err);
      console.log(error)
      res.status(500).send(err);
      return err;
    }
    else{
      console.log(docs);
      console.log("not error")
      res.status(200).send(docs);
      return docs;
    }
  })
})


module.exports = router;