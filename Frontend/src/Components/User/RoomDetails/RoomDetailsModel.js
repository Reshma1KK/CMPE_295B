import React, {useState} from "react";
import './RoomDetailsModel.css'
import { FiXCircle } from "react-icons/fi";
// import { FiArrowRight} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const ModelStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '80%',
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



const RoomDetailsModel = ({open, children, onClose})=>{

    if (!open) return null;

    return(
        <><div style={Overlay_Style} />
        <div style={ModelStyle}>
            <button onClick={onClose} style = {Close_Button}><FiXCircle style = {FiXCircle_Style}/></button>
            <h1>{children}</h1>
            <div >
            <img id = "float-child-el-img" src={localStorage.getItem('pic')} alt="img" />
            </div>
            <div id = "float-child-el-details">
            <h3>Amenities</h3>
            <li>Non-smoking rooms</li>
            <li>Suites</li>
            <li>Family rooms</li>
            <li>Air conditioning</li>
            <li>Desk</li>
            <li>Housekeeping</li>
            <li>Kitchenette</li>
            <li>Flatscreen TV</li>
            <li>Safe</li>
            <li>Sofa</li>
            <li>Telephone</li>
            <li>Dishwasher</li>
            <li>Microwave</li>
            <li>Refrigerator</li>
            <li>Stovetop</li>
            </div>
            </div>
        </>

    );


};

export default RoomDetailsModel;