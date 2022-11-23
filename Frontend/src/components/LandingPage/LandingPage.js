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
import {Modal,Box,Button} from '@mui/material';
import SearchBar from '../CustomComponents/SearchBar.js'

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

  const [open,setOpen]=useState(false);

  const handleOpen = () => { 
      setOpen(true);
  }
  const handleClose = () =>{
      setOpen(false);
  }

  return (
    <>
      <NavBar/>
      <div className='buttonGroup'>
        <button className='button'>
          Hotels <FontAwesomeIcon icon={faBed} />
        </button>
        <button className='button'>
          Vacation Rentals <FontAwesomeIcon icon={faHouse} />
        </button>
        <button className='button'>
          Things to Do <FontAwesomeIcon icon={faCheck} />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          transparent={true}
        >
          <Box sx={style}>
            <SearchBar/>
            <Button onClick={handleClose}></Button>
          </Box>
       </Modal>
        <button className="button" onClick={handleOpen}>
          Restaurants
          <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          transparent={true}
        >
          <Box sx={style}>
            <SearchBar/>
            <Button onClick={handleClose}></Button>
          </Box>
       </Modal>
        <button className='button'>
          Travel Stories <FontAwesomeIcon icon={faGlobe} />
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