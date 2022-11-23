"use strict";

const Rentals= require("../Models/VacationRentalsModel");

const handle_request = async (msg, callback) => {
    const res = {};
    Rentals.find({Location: msg.location},(error, rentals) => {
        if (error) {
            console.log('Failed to fetch data');
            callback(error, null);
          }else if(rentals){
                console.log('fetched Details');
                res.status = 200; res.data = rentals;
                callback(null, res);
              }
              else{
                  if(rentals === null ){
                    res.status = 400; res.data = "No details found";
                    callback(null, res);
                  }
              }
          

    });
}
exports.handle_request = handle_request;