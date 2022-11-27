var connection =  new require('./kafka/Connection');
const {mongoDB}=require('./config');
const mongoose=require('mongoose');

var options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 500,

};

mongoose.connect(mongoDB,options,(err,res)=>{
  if(err){
    console.log(err);
    console.log('Connection failed');
  }else{
    console.log('MongoDB Connected');
  }
})

var Users=require('./services/userSignup.js');
var userlogin=require('./services/userSignin.js');
var hotels = require('./services/viewHotel.js');
var rentals = require('./services/viewRentals.js');
var flights = require('./services/viewFlights.js');
var bookFlight = require('./services/bookFlight')
var bookNow = require('./services/bookNow');

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}

handleTopicRequest("post_user",Users)
handleTopicRequest("get_user",userlogin)
handleTopicRequest("viewHotels",hotels)
handleTopicRequest("viewRentals",rentals)
handleTopicRequest("viewFlights",flights)
handleTopicRequest("postFlightBooking",bookFlight)
handleTopicRequest("postBooking",bookNow)