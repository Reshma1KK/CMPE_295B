import React, {useState} from "react";
import './flights.css'
import RoundTripCal from "./RoundTripCal";
import OneWayCal from "./OneWayCal";
import {BiMinusCircle, BiPlusCircle} from 'react-icons/bi'
import Footer from "../Footer/footer";
import Navbar from '../../NavBar/NavBar' 

const FiXCircle_Style = {
    backgroundColor: 'white',
    width:'30px',
    height:'30px'

}

const Flights = ()=>{
    const[isOpen, setIsOpen] = useState(false);
    const[isOneWayOpen, setIsOneWayOpen] = useState(false);
    const [depart,setDepart] = useState("");
    const [arrival,setReturn] = useState("");
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [adultCountOne, setAdultCountone] = useState(0);
    const [childrenCountOne, setChildrenCountOne] = useState(0);

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

    function incrementAdultOne(){
        setAdultCountone(adultCountOne+1)
    }
    function decrementAdultOne(){
        if (adultCountOne > 0){
            setAdultCountone(adultCountOne-1)
        }
        
    }
    function incrementChildrenOne(){
        setChildrenCountOne(childrenCountOne+1)
    }
    function decrementChildrenOne(){
        if (childrenCountOne > 0){
            setChildrenCountOne(childrenCountOne-1)
        }
    }

    function findFlights(){
        setIsOpen(true);
        localStorage.setItem('type', 'round')
        localStorage.setItem('start',depart)
        localStorage.setItem('dest', arrival)
        localStorage.setItem('adult',adultCount)
        localStorage.setItem('children', childrenCount)

    }

    function findOneWayFlights(){
        setIsOneWayOpen(true);
        localStorage.setItem('type', 'oneWay')
        localStorage.setItem('start',depart)
        localStorage.setItem('dest', arrival)
        localStorage.setItem('adult',adultCountOne)
        localStorage.setItem('children', childrenCountOne)
    }

    return(
        <><Navbar/><div id="flights-home">
            <div id="flights-title"></div>

            <div id="flights-float">
                <h3>Find the Best flights</h3>
                <h4>Round Trip</h4>
                <div id="flights-float-sub1">
                    <p style={{ fontSize: "10px" }} >From</p>
                    <select type="text" id="location-select" onChange={(e)=>{
                    setDepart(e.target.value); }}>
                        <option value="">--Select--</option>
                        <option value="San Fransico">SFO</option>
                        <option value="Los Angeles">LAX</option>
                        <option value="New York City"> NYC</option>
                        <option value="Washington DC"> WAS</option>
                    </select>

                </div>
                <div id="flights-float-sub2">
                    <p style={{ fontSize: "10px" }}>To</p>
                    <select type="text" id="location-select" onChange={(e)=>{
                    setReturn(e.target.value); }}>
                        <option value="">--Select--</option>
                        <option value="San Fransico">SFO</option>
                        <option value="Los Angeles">LAX</option>
                        <option value="New York City"> NYC</option>
                        <option value="Washington DC"> WAS</option>
                    </select>
                </div>
                <div id="flights-float-sub3">
                    <p style={{ fontSize: "15px" }}> Travellers</p>
                    <div id="flights-float-sub4-left">
                        <div id="flights-float-sub4-left-sub1">
                            <p style={{ fontSize: "10px" }}> Adults</p>
                        </div>
                        <div id="count">
                            <button id="count-el" onClick={decrementAdult}><BiMinusCircle style={FiXCircle_Style} /></button>
                            {adultCount}
                            <button id="count-el" onClick={incrementAdult}><BiPlusCircle style={FiXCircle_Style} /></button>

                        </div>
                    </div>
                    <div id="flights-float-sub4-right">
                        <div id="flights-float-sub4-left-sub1">
                            <p style={{ fontSize: "10px" }}> Children</p>

                        </div>
                        <div id="count">
                            <button id="count-el" onClick={decrementChildren}><BiMinusCircle style={FiXCircle_Style} /></button>
                            {childrenCount}
                            <button id="count-el" onClick={incrementChildren}><BiPlusCircle style={FiXCircle_Style} /></button>

                        </div>

                    </div>

                </div>
                <div id="flights-float-sub4">
                    <button id="find-flights-el" onClick={findFlights}>Find flights</button>
                    <RoundTripCal open={isOpen} onClose={() => setIsOpen(false)} />

                </div>

            </div>
            <div id="flights-float-2">
                <h3>Find the Best flights</h3>
                <h4>One Way Trip</h4>
                <div id="flights-float-sub1">
                    <p style={{ fontSize: "10px" }}>From</p>
                    <select type="text" id="location-select" onChange={(e)=>{
                    setDepart(e.target.value); }}>
                        <option value="">--Select--</option>
                        <option value="San Fransico">SFO</option>
                        <option value="Los Angeles">LAX</option>
                        <option value="New York City"> NYC</option>
                        <option value="Washington DC"> WAS</option>
                    </select>

                </div>
                <div id="flights-float-sub2">
                    <p style={{ fontSize: "10px" }}>To</p>
                    <select type="text" id="location-select" onChange={(e)=>{
                    setReturn(e.target.value)}}>
                        <option value="">--Select--</option>
                        <option value="San Fransico">SFO</option>
                        <option value="Los Angeles">LAX</option>
                        <option value="New York City"> NYC</option>
                        <option value="Washington DC"> WAS</option>
                    </select>
                </div>
                <div id="flights-float-sub3">
                    <p style={{ fontSize: "15px" }}> Travellers</p>
                    <div id="flights-float-sub4-left">
                        <div id="flights-float-sub4-left-sub1">
                            <p style={{ fontSize: "10px" }}> Adults</p>
                        </div>
                        <div id="count">
                            <button id="count-el" onClick={decrementAdultOne}><BiMinusCircle style={FiXCircle_Style} /></button>
                            {adultCountOne}
                            <button id="count-el" onClick={incrementAdultOne}><BiPlusCircle style={FiXCircle_Style} /></button>

                        </div>
                    </div>
                    <div id="flights-float-sub4-right">
                        <div id="flights-float-sub4-left-sub1">
                            <p style={{ fontSize: "10px" }}> Children</p>

                        </div>
                        <div id="count">
                            <button id="count-el" onClick={decrementChildrenOne}><BiMinusCircle style={FiXCircle_Style} /></button>
                            {childrenCountOne}
                            <button id="count-el" onClick={incrementChildrenOne}><BiPlusCircle style={FiXCircle_Style} /></button>

                        </div>

                    </div>

                </div>
                <div id="flights-float-sub4">
                    <button id="find-flights-oneway-el" onClick={findOneWayFlights}>Find flights</button>
                    <OneWayCal open={isOneWayOpen} onClose={() => setIsOneWayOpen(false)} />

                </div>

            </div>

        </div><Footer /></>
    )
}

export default Flights;