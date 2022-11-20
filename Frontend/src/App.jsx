import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js"
import Restaurants from "./components/Restaurants/Restaurants.js"
import ReserveTable from "./components/Restaurants/ReserveTable.js"
import SearchBar from "./components/SearchBar/SearchBar.js"

function App() {
  console.log("Hello")
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Restaurants" element={<Restaurants/>} />
        <Route path="/ReserveTable" element={<ReserveTable/>} />
        <Route path="/SearchBar" element={<SearchBar/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
