const kafka = require('../Kafka/client');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
  
    kafka.make_request('viewFlights',req.body, function(err,data){
      if (err){
        
          console.log("flights err");
          res.json({
              status:"error",
              msg:"System Error, Try Again."
          })
      }else if(data.status===200){
          
          console.log('viewing Hotels');
          let flights=[];
        for(let i=0;i<data.data.length;i++){
            let details={
            
            _id:data.data[i]._id,
            Name:data.data[i].Name,
            Start:data.data[i].Start,
            Rate:data.data[i].Rate,
            Time:data.data[i].Time,
            Dest:data.data[i].Dest,
            Return:data.data[i].Return,
            TimeDuration:data.data[i].TimeDuration,
            ReturnDuration:data.data[i].ReturnDuration,
            Rate: data.data[i].Rate,
                           } 
                    flights.push(details);           
                }
               
          console.log(flights)
          res.status(200).json({flights});
             
          }else {
            console.log('Invalid data');
            
            res.end('Invalid data');
          }
      
  });
  
  });
  
  module.exports = router; 