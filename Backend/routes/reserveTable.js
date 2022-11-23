const router = require ("express").Router();
var ReserveTable = require("../models/reserveTableModel")

console.log("here for restaurant")

router.post("/", (req,res) =>{
      console.log(req.body)
      const table={
          guests:req.body.guests,
          date:req.body.date,
          time:req.body.time,
          restaurantName:req.body.restaurantName
      }
  ReserveTable.find(table, (error,data) => {
        if(error){
        res.writeHead(400,{
            "content-type":"text/plain",
        })
        console.log("Mongo Error");
        console.log(error)
        return error;
        }
        else{
        console.log("Fetching result");
                var newTable = new ReserveTable({
                    guests:req.body.guests,
                    date:req.body.date,
                    time:req.body.time,
                    restaurantName:req.body.restaurantName
                });
                newTable.save((insertErr,insertData) => {
                    if(insertErr){
                    console.log(insertErr)
                    res.status=400;
                    res.data="Cannot add table details into db"
                        return res.data;
                    }
                    else{
                        console.log("Inserted Successfully")
                        res.status=200;
                        res.data=insertData;
                        return res;
                    }
                });
        }
    })
})


module.exports = router;