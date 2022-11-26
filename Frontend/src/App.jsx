import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage.js"
import Restaurants from "./Components/Restaurants/Restaurants.js"
import ReserveTable from "./Components/Restaurants/ReserveTable.js"
import SearchBar from "./Components/CustomComponents/SearchBar.js"
import Landing from './Components/User/Landing/Landing.js';
import SignUp from './Components/User/SignUp/Signup';
import SignIn from './Components/User/SignIn/SignIn';
import Hotels from './Components/User/Hotels/Hotels.js';
import CalenderModel from './Components/User/Hotels/CalenderModel.js';
import BookHotel from './Components/User/BookHotel/BookHotel.js';
import ConfirmModel from './Components/User/BookHotel/ConfirmModel.js';
import RoomTypes from './Components/User/Hotels/roomTypes.js';
import VactionRentals from './Components/User/Hotels/vacationRentals.js';
import BookRentals from './Components/User/BookRentals/bookRentals.js';
import Flights from './Components/User/Flights/flights.js';
import ViewFlights from './Components/User/Flights/viewFlights.js';
import BookFlight from './Components/User/Flights/bookFlight';
import OneWayFlights from './Components/User/Flights/viewOneWay'
import ThingsToDo from './Components/ThingsToDo/ThingsToDo'
import ReserveActivity from './Components/ThingsToDo/ReserveActivity'

function App() {
  console.log("Hello")
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Landing" element={<LandingPage/>} />
        <Route path="/Restaurants" element={<Restaurants/>} />
        <Route path="/ReserveTable" element={<ReserveTable/>} />
        <Route path="/SearchBar" element={<SearchBar/>} />
        <Route exact path='/' element={<Landing/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/travelbuddy' element={<LandingPage/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/calenderModel' element={<CalenderModel/>} />
        <Route path='/bookHotel' element={<BookHotel/>} />
        <Route path='/confirmModel' element={<ConfirmModel/>} />
        <Route path='/roomTypes' element={<RoomTypes/>} />
        <Route path='/vacationRentals' element={<VactionRentals/>} />
        <Route path='/bookRentals' element={<BookRentals/>} />
        <Route path='/flights' element={<Flights/>} />
        <Route path='/viewFlights' element={<ViewFlights/>} />
        <Route path='/bookFlight' element={< BookFlight/>} />
        <Route path='/oneWayFlights' element={< OneWayFlights/>} />
        <Route path='/ThingsToDo' element={< ThingsToDo/>} />
        <Route path='/ReserveActivity' element={< ReserveActivity/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
