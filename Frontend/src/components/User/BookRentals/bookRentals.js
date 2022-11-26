import React, {useState} from 'react';
import ConfirmModel from '../BookHotel/ConfirmModel'
import './bookRentals.css'
import Footer from '../Footer/footer';
import Axios from 'axios';

const BookRentals = ()=>{
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
    end:JSON.stringify(localStorage.getItem('endDate')).slice(1, 11), bed:localStorage.getItem('bed'), bath:localStorage.getItem('bath'),
    adult:localStorage.getItem('adult'), children: localStorage.getItem('children'), rate:(cost + tax)
    }).then((response)=>{
      console.log("details entered")
     });
    }

    return(
        <><div id="bookRentals">
            <div id="bookRental-title">
                <h1>{localStorage.getItem('title')}</h1>

            </div>
            <div id="bookRental-part1">
                <img id="imagebookRental" src={localStorage.getItem('pic')} alt="img" />
                <h2>Overview</h2>
                <div id = "bookRental-desc">
                <p>{localStorage.getItem('desc')}</p>
                </div>
                <h2>Amenities</h2>
                <p>{localStorage.getItem('bed')} Bedroom</p>
                <p>{localStorage.getItem('bath')} Bathroom</p>
                <div id="bookRental-part1-sub1">
                    DVD Player
                    Air Conditioning
                    Grill
                    Dishwasher
                    Dryer
                    Fireplace
                </div>
                <div id="bookRental-part1-sub2">
                    Refrigerator
                    Internet Access
                    Microwave
                    Patio
                    Stove
                    Toaster
                </div>
                <div id="bookRental-part1-sub3">
                    Towels Provided
                    TV
                    Washer
                    Wi-Fi
                    Horse Riding Nearby
                </div>
            </div>
            <div id="bookRental-part2">
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
        <Footer/>
        </>
    )

}

export default BookRentals;