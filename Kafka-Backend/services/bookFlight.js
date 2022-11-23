"use strict";

const FlightBooking= require("../Models/BookingsModel");

const handle_request= async(msg, callback)=>{
   
    console.log("Inside user signup");
    console.log(msg);
    const res = {};
            var newBooking= new FlightBooking({
                userId:msg.userId,
                Start:msg.start,
                Dest: msg.dest,
                Time: msg.time,
                Return:msg.return,
                Rate: msg.rate,
                Count: msg.count
                
              });


              newBooking.save ((error,data)=>{
              console.log("registered");
              if(error){
                console.log('Cannot insert user details into db');
               res.status = 400; res.data = "Cannot insert user details into db";
                callback(null, error);
              }else{
                console.log('Inserted sucessfully');
                res.status = 200; 
                res.data = data;
                callback(null, res);
              }
            });
          }

    

exports.handle_request = handle_request;