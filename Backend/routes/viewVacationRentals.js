const kafka = require('../Kafka/client');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
  
    kafka.make_request('viewRentals',req.body, function(err,data){
      if (err){
        
          console.log("viewHotels err");
          res.json({
              status:"error",
              msg:"System Error, Try Again."
          })
      }else if(data.status===200){
          
          console.log('viewing Hotels');
          let rentals=[];
        for(let i=0;i<data.data.length;i++){
            let details={
            
            _id:data.data[i]._id,
            Name:data.data[i].Name,
            Type:data.data[i].Type,
            Location:data.data[i].Location,
            Pic:data.data[i].Pic,
            Rate:data.data[i].Rate,
            Address:data.data[i].Address,
            Bathroom:data.data[i].Bathroom,
            Bedroom:data.data[i].Bedroom,
            Description:data.data[i].Description,
                           } 
                           rentals.push(details);           
                }
               
          console.log(rentals)
          res.status(200).json({rentals});
             
          }else {
            console.log('Invalid data');
            
            res.end('Invalid data');
          }
      
  });
  
  });
  
  module.exports = router; 