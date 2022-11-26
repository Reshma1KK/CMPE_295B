import React, {useState} from 'react';
import '../Hotels/hotels.css'
import {Link} from 'react-router-dom';
import RoomDetailsModel from '../RoomDetails/RoomDetailsModel'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/footer';
import Navbar from '../../NavBar/NavBar' 

const RoomTypes = ()=>{
    const navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(false);
    let rate = JSON.stringify(localStorage.getItem('rate'))
    rate = parseInt(rate.slice(1,4))
    return(
        <><Navbar/><div id="viewHotel">
            <h1>Select your Room</h1>
            <><div id="hotelItems">
                <div id="float-child-1">
                    <p><img id="imageHotel" src={localStorage.getItem('pic')} alt="img" /></p>
                </div>
                <div id="float-child">
                    <p><h3>Guest Room King</h3></p>
                    <p>Enjoy a stay in the Guestroom King at {localStorage.getItem('title')}.</p>
                    <li>See cancellation policy</li>
                    <h2>{rate + 20} USD Avg./night</h2>
                    <p><Link onClick={() => { setIsOpen(true); } } style={{ color: 'black' }}>Room Details</Link></p>
                    <RoomDetailsModel open={isOpen} onClose={() => setIsOpen(false)} />

                    <button id="bookHotel" onClick={() => {
                        localStorage.setItem('roomType', 'Guest Room King');
                        localStorage.setItem('rate', rate + 20);
                        navigate('/bookHotel');
                    } }>Select Room</button>
                    {/* <CalenderModel open = {isOpen} onClose={()=> setIsOpen(false)}/> */}
                </div>
            </div></>
            <><div id="hotelItems">
                <div id="float-child-1">
                    <p><img id="imageHotel" src={localStorage.getItem('pic')} alt="img" /></p>
                </div>
                <div id="float-child">
                    <p><h3>Guest Room Queen</h3></p>
                    <p>Enjoy a stay in the Guestroom Queen at {localStorage.getItem('title')}.</p>
                    <li>See cancellation policy</li>
                    <h2>{rate + 10} USD Avg./night</h2>
                    <p><Link onClick={() => { setIsOpen(true); } } style={{ color: 'black' }}>Room Details</Link></p>
                    <RoomDetailsModel open={isOpen} onClose={() => setIsOpen(false)} />

                    <button id="bookHotel" onClick={() => {
                        localStorage.setItem('roomType', 'Guest Room Queen');
                        localStorage.setItem('rate', rate + 10);
                        navigate('/bookHotel');
                    } }>Select Room</button>
                    {/* <CalenderModel open = {isOpen} onClose={()=> setIsOpen(false)}/> */}
                </div>
            </div></>
            <><div id="hotelItems">
                <div id="float-child-1">
                    <p><img id="imageHotel" src={localStorage.getItem('pic')} alt="img" /></p>
                </div>
                <div id="float-child">
                    <p><h3>Studio Suite</h3></p>
                    <p>Enjoy a stay in the Studio Suite at {localStorage.getItem('title')}.</p>
                    <li>See cancellation policy</li>
                    <h2>{rate} USD Avg./night</h2>
                    <p><Link onClick={() => { setIsOpen(true); } } style={{ color: 'black' }}>Room Details</Link></p>
                    <RoomDetailsModel open={isOpen} onClose={() => setIsOpen(false)} />

                    <button id="bookHotel" onClick={() => {
                        localStorage.setItem('roomType', 'Studio Suite');
                        navigate('/bookHotel');
                    } }>Select Room</button>
                    {/* <CalenderModel open = {isOpen} onClose={()=> setIsOpen(false)}/> */}
                </div>
            </div></>

        </div><Footer /></>
    )
}

export default RoomTypes;