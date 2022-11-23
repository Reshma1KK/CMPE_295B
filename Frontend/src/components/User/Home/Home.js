import React, {useState} from "react";
import './Home.css'
import Model from '../Model/Model'
import { useNavigate } from 'react-router-dom';
import VacationRentalModel from "../Model/VacationRentalModel";
import Axios from 'axios';

const Home = ()=>{
    const navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(false);
    const[isRentalOpen, SetIsRentalsOpen] = useState(false);

    return(
        <div>
        <button onClick={()=> {setIsOpen(true); localStorage.setItem('curr', 'H')}} >Hotels</button>
        <Model open = {isOpen} onClose={()=> setIsOpen(false)}/>
        <button onClick={()=> {SetIsRentalsOpen(true);localStorage.setItem('curr', 'VC') }}>Vacation rentals</button>
        <VacationRentalModel open = {isRentalOpen} onClose={()=> SetIsRentalsOpen(false)}/>
        <button onClick={()=>{navigate('/flights') }}> Flights</button>
        </div>
    );


};

export default Home;