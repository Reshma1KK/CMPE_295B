import React, {useState} from 'react';
import Axios from 'axios';
import './hotels.css'
import Hotel_1 from '../../Images/Hotel_1.jpg';
import CalenderModel from './CalenderModel.js';
import Footer from '../Footer/footer';

const Hotels = ()=>{
    const Hotels = JSON.parse(localStorage.getItem('hotels'))
    const[isOpen, setIsOpen] = useState(false);
    return(
        <><div id="viewHotel">
                        {Hotels.map(function (d, idx) {

                            return (
                                <><div id="hotelItems">
                                    <div id="float-child-1">
                                        <p key={idx}><img id="imageHotel" src={d.Pic} alt="img" /></p>
                                    </div>
                                    <div id="float-child">
                                        <p style={{ fontSize: "larger", color: 'seagreen' }} key={idx}><h4>{d.Name}</h4></p>
                                        <p key={idx}>{d.Description}</p>
                                        <p key={idx}>{d.Location}</p>
                                        <p key={idx}>{d.Rate}$ per night</p>
                                        <button id="bookHotel" onClick={() => {
                                            setIsOpen(true);
                                            localStorage.setItem('title', d.Name);
                                            localStorage.setItem('rate', d.Rate);
                                            localStorage.setItem('pic', d.Pic);
                                            localStorage.setItem('address', d.Address);
                                        } }>Book Now</button>
                                        <CalenderModel open={isOpen} onClose={() => setIsOpen(false)} />
                                    </div>
                                </div></>
                            );
                        })}
        </div><Footer /></>
    )
}

export default Hotels;
