"use strict";

const Hotels= require("../Models/HotelModel");

const handle_request = async (msg, callback) => {
    const res = {};
    Hotels.find({Location: msg.location},(error, hotels) => {
        if (error) {
            console.log('Failed to fetch data');
            callback(error, null);
          }else if(hotels){
                console.log('fetched Details');
                res.status = 200; res.data = hotels;
                callback(null, res);
              }
              else{
                  if(hotels === null ){
                    res.status = 400; res.data = "No details found";
                    callback(null, res);
                  }
              }
          

    });
}
exports.handle_request = handle_request;