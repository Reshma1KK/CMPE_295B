var express = require('express');
// const dotenv = require("dotenv")
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require("express-session");
var mongoose=require("mongoose");
const config = require("./Util/config");



// dotenv.config()
// const PORT = process.env.PORT

app.use(cors({ origin: `http://localhost:3000`, credentials: true }));

app.use(
  session({
  secret: "CMPE_295B_TravelBuddy",
  resave:false,
  saveUninitialized: false,
  duration: 60*60*2000,
  activeDuration: 5*60*1000,
}),
);

// mongoose.connect(process.env.MONGO_URI,options,(err,res) => {
//   if (err){
//     console.log(err);
//     console.log("MongoDB connection failed");
//   }
//   else{
//     global.res=res;
//     console.log("MongoDB connected");
//   }


//REAL CODE
// mongoose.connect(
//     config.mongoURI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       maxPoolSize: 500
//     },
//     (err,res) => {
//       if(err){
//         console.log("Cannot connect to MongoDB")
//         console.log(err)
//       }
//       else{
//       // console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
//       console.log("Connection Successful")
//     }
//     });

//     mongoose.set("debug", (collectionName, method, query, doc) => {
//       console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
app.use(express.json())
mongoose.connect(config.mongoURI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 500
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials",'true');
  res.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE,UPDATE");
  res.setHeader("Access-Control-Allow-Headers","Access-Control-Allow-Method,Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-type");
  res.setHeader("Cache-Control","no-cache");
  next();
});

const getRestaurants = require("./routes/getRestaurants")
app.use("/getRestaurants",getRestaurants);

const restaurant = require("./routes/restaurant")
app.use("/restaurant",restaurant);

const reserveTable = require("./routes/reserveTable")
app.use("/reserveTable",reserveTable);

const getThingsToDo = require("./routes/getThingsToDo")
app.use("/getThingsToDo",getThingsToDo);

const reserveActivity = require("./routes/reserveActivity")
app.use("/reserveActivity",reserveActivity);

const userSignup=require("./routes/SignUp");
app.use('/signup', userSignup);

const userSignin=require("./routes/SignIn");
app.use('/signin', userSignin);

const viewHotel=require("./routes/viewHotels");
app.use('/viewHotels', viewHotel);

const viewVactionRentals=require("./routes/viewVacationRentals");
app.use('/viewRentals', viewVactionRentals);

const viewFlights = require('./routes/viewFlights')
app.use('/viewflights', viewFlights)

const bookFlight = require('./routes/flightBooking')
app.use('/bookFlight', bookFlight)

const bookings = require('./routes/bookings')
app.use('/bookNow', bookings)

app.listen(3001,()=>{
    console.log(`Server running on port 3001`)
});