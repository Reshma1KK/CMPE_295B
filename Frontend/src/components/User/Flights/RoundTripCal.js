import React, {useState} from "react";
import '../Hotels/CalenderModel.css'
import { FiXCircle } from "react-icons/fi";
import { FiArrowRight} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Axios from 'axios';

const ModelStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '60%',
    borderRadius: '20px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const Overlay_Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const Close_Button = {
    backgroundColor: '#FFF',
    border: 'None',

}
const FiXCircle_Style = {
    backgroundColor: '#FFF',
    width:'35px',
    height:'35px'

}

const FiArrowRight_Style = {
    alignContent: 'center',
    width:'35px',
    height:'35px'

}

const RoundTripCal = ({open, children, onClose})=>{
    const navigate = useNavigate();
    const [depart,setDepart]=useState(new Date());
    const [arrival,setArrival]=useState(new Date());

    function selectDates(){
        localStorage.setItem('depart', depart)
        localStorage.setItem('arrival', arrival)
        Axios.post("http://localhost:3001/viewflights",
    {start:localStorage.getItem('start'), dest:localStorage.getItem('dest')}).then((response)=>{
        console.log(response.data.flights)
        localStorage.setItem('flights',JSON.stringify(response.data.flights));
    })
        navigate('/viewFlights')
        
    }
    if (!open) return null;
    return(
        <><div style={Overlay_Style} />
        <div style={ModelStyle}>
            <button onClick={onClose} style = {Close_Button}><FiXCircle style = {FiXCircle_Style}/></button>
            <h1>{children}</h1>
            
            <div id = "float-child">
            <p>Depart</p>
            <Calendar onChange={(e)=>{
                    setDepart(e); }} value={depart} />
            
            </div>
            <div id = "float-child">
            <p>Return</p>
            <Calendar onChange={(e)=>{
                    setArrival(e); }} value={arrival} />
            
            </div>
           <button id = "dateSelect" onClick={selectDates} ><FiArrowRight style = {FiArrowRight_Style}/></button>
        </div></>
    )
}

export default RoundTripCal;

