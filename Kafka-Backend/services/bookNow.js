"use strict";

const HotelrentalBooking= require("../Models/BookNow");

const handle_request= async(msg, callback)=>{
   
    console.log("Inside user signup");
    console.log(msg);
    const res = {};
            var newBooking= new HotelrentalBooking({
                userId:msg.userId,
                Name:msg.name,
                Start:msg.start,
                End: msg.end,
                RoomType:msg.roomType,
                Adult: msg.adult,
                Children:msg.children,
                Rate: msg.rate,
                Bed:msg.bed,
                Bath: msg.bath,
                
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