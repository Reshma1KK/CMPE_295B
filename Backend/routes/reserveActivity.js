const router = require ("express").Router();
var ThingsToDo = require("../models/thingsToDoModel")

console.log("here for restaurant")

router.get("/:name", (req,res) =>{
  console.log("request body", req.params)
  ThingsToDo.find({name: req.params.name} ,function(err, docs){
    if(err){
      console.log("error",err);
      res.status(500).send(err);
      return err;
    }
    else{
      console.log("selected restaurant")
      console.log(docs);
      res.status(200).send(docs);
      return docs;
    }
  })
})


module.exports = router;