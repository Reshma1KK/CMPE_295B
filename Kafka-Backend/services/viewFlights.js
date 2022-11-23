"use strict";

const Flights= require("../Models/FlightsModel");

const handle_request = async (msg, callback) => {
    const res = {};
    Flights.find({Start: msg.start, Dest: msg.dest},(error, flights) => {
        if (error) {
            console.log('Failed to fetch data');
            callback(error, null);
          }else if(flights){
                console.log('fetched Details');
                console.log(flights);
                res.status = 200; res.data = flights;
                callback(null, res);
              }
              else{
                  if(flights === null ){
                    res.status = 400; res.data = "No details found";
                    callback(null, res);
                  }
              }
          

    });
}
exports.handle_request = handle_request;