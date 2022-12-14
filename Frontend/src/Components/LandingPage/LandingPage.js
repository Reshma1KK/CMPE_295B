import React, {useState} from "react";
import './LandingPage.css'
import NavBar from '../NavBar/NavBar.js';
import {
  faBed,
  faCheck,
  faGlobe,
  faHouse,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Model from "../User/Model/Model";
import VacationRentalModel from "../User/Model/VacationRentalModel";
import RestaurantModel from "../User/Model/RestaurantModel"
import ThingsToDoModel from "../User/Model/ThingsToDoModel"
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 300,
  border: '2px solid #000',
  boxShadow: 100,
  p: 4,
};


function LandingPage() {
  const navigate = useNavigate();
  
  const[isOpen, setIsOpen] = useState(false);
  const[isRentalOpen, SetIsRentalsOpen] = useState(false);
  const [open,setOpen]=useState(false);
  const [tOpen,setTopen]=useState(false);

  return (
    <>
      <NavBar/>

      

      <div className='buttonGroup'>
        <button className='button' onClick={()=> {setIsOpen(true); localStorage.setItem('curr', 'H')}} >
          Hotels <FontAwesomeIcon icon={faBed} />
        </button>
        <Model open = {isOpen} onClose={()=> setIsOpen(false)}/>
        <button className='button' onClick={()=> {SetIsRentalsOpen(true);localStorage.setItem('curr', 'VC') }}>
          Vacation Rentals <FontAwesomeIcon icon={faHouse} />
        </button>
        <VacationRentalModel open = {isRentalOpen} onClose={()=> SetIsRentalsOpen(false)}/>
        <button className='button' onClick={()=> {setTopen(true)}}>
          Things to Do <FontAwesomeIcon icon={faCheck} />
        </button>
        <ThingsToDoModel open = {tOpen} onClose={()=> setTopen(false)}/>
        <button className="button" onClick={()=> {setOpen(true)}}>
          Restaurants <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
        </button>
        <RestaurantModel open = {open} onClose={()=> setOpen(false)}/>
        <button className='button' onClick={()=>{navigate('/flights') }}>
          Flights <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button className='button'>More ...</button>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/landing.jpeg'} alt="Landing-Img" className="landing-img searchBar" style={{padding:"80px", backgroundColor:"white",height:"550px"}}/>
      </div>
    </>
  )
}

export default LandingPage