import React, {useState} from 'react';
import '../Hotels/hotels.css'
import CalenderModel from './CalenderModel'
import Footer from '../Footer/footer';

const VactionRentals = ()=>{
    const VactionRentals = JSON.parse(localStorage.getItem('vacationRentals'))
    const[isOpen, setIsOpen] = useState(false);
    
    return(
        <><div id="HotelItems">
            <div id="viewHotel" style={{ color: "seagreen" }}>
                <div id="hotel">
                    <div id="container">
                        {VactionRentals.map(function (d, idx) {

                            return (
                                <><div id="hotelItems">
                                    <div id="float-child-1">
                                        <p key={idx}><img id="imageHotel" src={d.Pic} alt="img" /></p>
                                    </div>
                                    <div id="float-child">
                                        <p style={{ fontSize: "larger", color: 'seagreen' }} key={idx}><h4>{d.Name}</h4></p>
                                        <p key={idx}>{d.Location}</p>
                                        <p key={idx}>{d.Rate}$ per night</p>
                                        <button id="bookHotel" onClick={() => {
                                            setIsOpen(true);
                                            localStorage.setItem('title', d.Name);
                                            localStorage.setItem('rate', d.Rate);
                                            localStorage.setItem('pic', d.Pic);
                                            localStorage.setItem('address', d.Address);
                                            localStorage.setItem('desc', d.Description);
                                            localStorage.setItem('bath', d.Bathroom);
                                            localStorage.setItem('bed', d.Bedroom);
                                        } }>Book Now</button>
                                        <CalenderModel open={isOpen} onClose={() => setIsOpen(false)} />
                                    </div>
                                </div></>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div><Footer /></>
    )
}

export default VactionRentals;
