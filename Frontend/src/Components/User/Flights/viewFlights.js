import React from 'react';
import Footer from '../Footer/footer';
import './viewFlights.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../NavBar/NavBar' 

const ViewFlights = ()=>{
    const Flights = JSON.parse(localStorage.getItem('flights'))
    const navigate = useNavigate();

    return(
        <><Navbar/><div id="viewFlights-body">
            {Flights.map(function (d, idx) {

                return (
                    <><div id="flight-items">
                        <div id = "flight-items-1">
                            <div id = "flight-items-1-sub1">
                            <p key={idx}>{d.Time}</p>
                            <p key={idx} style={{color:"gray"}}>{d.Start} - {d.Dest}</p>
                            </div>
                            <div id = "flight-items-1-sub1">
                            <p key={idx}>{d.Return}</p>
                            <p key={idx} style={{color:"gray"}}>{d.Dest} - {d.Start}</p>
                            </div>                            
                            
                        </div>
                        <div id = "flight-items-2">
                        <div id = "flight-items-1-sub1">
                            <p key={idx}>{d.TimeDuration}</p>
                            </div>
                            <div id = "flight-items-1-sub1">
                            <p key={idx}>{d.ReturnDuration}</p>
                            </div>
                        </div>
                        <div id = "flight-items-3">
                            <div id = "flight-items-1-sub1">
                            <h3 key={idx}>${d.Rate}</h3>
                            </div>
                            <div id = "flight-items-1-sub1">
                            <button id="bookFlight" onClick={() => {
                                navigate('/bookFlight');
                                localStorage.setItem('rate', d.Rate);
                            } }>Book Now</button>
                            </div>
                        
                        </div>
                            
                        
                    </div></>
                );
            })}
        </div><Footer /></>
        
    )

}

export default ViewFlights;
