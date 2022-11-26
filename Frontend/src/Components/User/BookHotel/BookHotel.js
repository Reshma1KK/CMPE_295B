import React, {useState} from 'react';
import Axios from 'axios';
import './BookHotel.css'
import ConfirmModel from './ConfirmModel';
import Footer from '../Footer/footer';

const BookHotel = ()=>{
    const[isOpen, setIsOpen] = useState(false);
    let day1 = JSON.stringify(localStorage.getItem('startDate'))
    let day2 = JSON.stringify(localStorage.getItem('endDate'))
    day1 = day1.slice(8,11)
    day2 = day2.slice(8,11)
    let rate = JSON.stringify(localStorage.getItem('rate'))
    rate = rate.slice(1,4)
    let num = parseInt(day2) - parseInt(day1)
    let num1 = parseInt(rate)
    let cost = num * num1
    let tax = 0.1*cost

    function bookNow(){
        setIsOpen(true)
        Axios.post("http://localhost:3001/bookNow",
    {userId:localStorage.getItem('id'), name:localStorage.getItem('title'), start:JSON.stringify(localStorage.getItem('startDate')).slice(1, 11), 
    end:JSON.stringify(localStorage.getItem('endDate')).slice(1, 11), roomType:localStorage.getItem('roomType'),
    adult:localStorage.getItem('adult'), children: localStorage.getItem('children'), rate:(cost + tax)
    }).then((response)=>{
      console.log("details entered")
     });
    }

    return(
        <><div id="bookHotel-el">
            <h1>Review Order</h1>
            <div id="float-container-1">
                <div id="float-child-el-order-1">
                    <div id="float-child-el-order-sub-1"><img id="imageHotel-el" src={localStorage.getItem('pic')} alt="img" /></div>
                    <div id="float-child-el-order-sub-2">
                        <h3>{localStorage.getItem('title')}</h3>
                        <h3>{(JSON.stringify(localStorage.getItem('startDate'))).slice(1, 11)} - {(JSON.stringify(localStorage.getItem('endDate'))).slice(1, 11)}</h3>
                        <p>{localStorage.getItem('address')}</p>
                        <p>{localStorage.getItem('roomType')}, {localStorage.getItem('adult')} Adult, {localStorage.getItem('children')} Children</p>

                    </div>
                </div>
                <div id="float-child-el-order-2">
                    <h3>Summary of Charges</h3>
                    <p>{num} Night * $ {localStorage.getItem('rate')} per night: ${cost}</p>
                    <p>Taxes and fees: ${tax}</p>
                    <h3>Total: ${cost + tax}</h3>
                    <p>Due Today: ${cost + tax}</p>
                    <p>Due at Check in: $0</p>
                    <button id="checkout-el" onClick={bookNow}>Proceed to Check Out</button>
                    <ConfirmModel open={isOpen} onClose={() => setIsOpen(false)} />
                </div>

            </div>
        </div><Footer /></>
    )
}

export default BookHotel;

