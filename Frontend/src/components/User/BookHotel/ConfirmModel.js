import React, {useState} from "react";
import './ConfirmModel.css';
import { useNavigate } from 'react-router-dom';

const ModelStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '20%',
    height: '20%',
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


const ConfirmModel = ({open, children, onClose})=>{
    const navigate = useNavigate();
    if (!open) return null;

    function returnHome(){
        navigate('/Landing')
    }

    return(
        <><div style={Overlay_Style} />
        <div style={ModelStyle}>
            <h1>{children}</h1>
            <div id = "confirm-model-el">
            <p>Your Reservation is confirmed!</p>
           <button id = "returnToHome-el" onClick={returnHome} >Return to Home</button>
            </div>
            
        </div></>
    );


};

export default ConfirmModel;