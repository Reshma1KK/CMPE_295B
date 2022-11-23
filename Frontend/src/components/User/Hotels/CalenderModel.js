import React, {useState} from "react";
import './CalenderModel.css'
import { FiXCircle } from "react-icons/fi";
import { FiArrowRight} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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


const CalenderModel = ({open, children, onClose})=>{
    const navigate = useNavigate();
    const [startDate,setstartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);

    function selectDates(){
        localStorage.setItem('startDate', startDate)
        localStorage.setItem('endDate', endDate)
        localStorage.setItem('adult',adultCount)
        localStorage.setItem('children', childrenCount)
        if (localStorage.getItem('curr') == 'H'){
            navigate('/roomTypes')
        }
        else{
            navigate('/bookRentals')
        }
        
    }

    if (!open) return null;

    function incrementAdult(){
        setAdultCount(adultCount+1)
    }
    function decrementAdult(){
        if (adultCount > 0){
            setAdultCount(adultCount-1)
        }
        
    }
    function incrementChildren(){
        setChildrenCount(childrenCount+1)
    }
    function decrementChildren(){
        if (childrenCount >0){
        setChildrenCount(childrenCount-1)
        }
    }

    return(
        <><div style={Overlay_Style} />
        <div style={ModelStyle}>
            <button onClick={onClose} style = {Close_Button}><FiXCircle style = {FiXCircle_Style}/></button>
            <h1>{children}</h1>
            <div id = "countGuest">
                Adult: {adultCount}
                <button onClick={incrementAdult}>+</button>    
                <button onClick={decrementAdult}>-</button>
                Children: {childrenCount}
                <button onClick={incrementChildren}>+</button>    
                <button onClick={decrementChildren}>-</button>
            </div>
            <div id = "float-child">
            <p>Check In</p>
            <Calendar onChange={(e)=>{
                    setstartDate(e); 
                    console.log(startDate)
                    console.log(typeof startDate)}} value={startDate} />
            
            </div>
            <div id = "float-child">
            <p>Check Out</p>
            <Calendar onChange={(e)=>{
                    setEndDate(e); }} value={endDate} />
            
            </div>
           <button id = "dateSelect" onClick={selectDates} ><FiArrowRight style = {FiArrowRight_Style}/></button>
        </div></>
    );


};

export default CalenderModel;