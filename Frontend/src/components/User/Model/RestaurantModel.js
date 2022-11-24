import React, {useState} from "react";
import { FiXCircle } from "react-icons/fi";
import './Model.css'
import { useNavigate } from 'react-router-dom';

const ModelStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
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

const RestaurantModel = ({open, children, onClose})=>{
    const navigate = useNavigate();
    const [location,setLocation]=useState(" ");

    function viewRestaurants(){
       localStorage.setItem("location",location)
       console.log("hello")
        navigate('/Restaurants')
    }
    if (!open) return null;

    return(
        <><div style={Overlay_Style} />
        <div style={ModelStyle}>
            <button onClick={onClose} style = {Close_Button}><FiXCircle style = {FiXCircle_Style}/></button>
            <h1>{children}</h1>
            <input type="text" id = "search" placeholder="Where to?" onChange={(e)=>{
                    setLocation(e.target.value) }}
           ></input>
           <button id = "hotelSearch" onClick={viewRestaurants}>Go!</button>

        </div></>
    );


};

export default RestaurantModel;