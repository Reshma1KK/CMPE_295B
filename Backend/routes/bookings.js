const kafka = require('../Kafka/client');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
  
  kafka.make_request('postBooking',req.body, function(err,data){
    console.log('inside');
    
    if (err){
      
        console.log("Inside user sign up err");
        res.json({
            status:"error",
            msg:"System Error, Try Again."
        })
    }else if(data.status===200){
        console.log("Inside else");
        console.log('successfully registered');
        const payload = {
          _id: data.data._id,
        };
        // const token = jwt.sign(payload, secret, {
        //   expiresIn: 1008000,
        // });
        // const fullToken = `JWT ${token}`;
        console.log(payload)
        res.status(200).json({payload });
           
        }else {
          console.log('Invalid data');
          
          res.end('Invalid data');
        }
    
});

});

module.exports = router;  