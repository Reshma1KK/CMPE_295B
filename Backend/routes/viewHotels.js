const kafka = require('../Kafka/client');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
  
    kafka.make_request('viewHotels',req.body, function(err,data){
      if (err){
        
          console.log("viewHotels err");
          res.json({
              status:"error",
              msg:"System Error, Try Again."
          })
      }else if(data.status===200){
          
          console.log('viewing Hotels');
          let hotels=[];
        for(let i=0;i<data.data.length;i++){
            let details={
            
            _id:data.data[i]._id,
            Name:data.data[i].Name,
            Description:data.data[i].Description,
            Location:data.data[i].Location,
            Pic:data.data[i].Pic,
            Rate:data.data[i].Rate,
            Address:data.data[i].Address,
                           } 
                    hotels.push(details);           
                }
               
          console.log(hotels)
          res.status(200).json({hotels});
             
          }else {
            console.log('Invalid data');
            
            res.end('Invalid data');
          }
      
  });
  
  });
  
  module.exports = router; 