import React,{useState} from "react";
import "./SearchBar.css";
import {Link} from "react-router-dom"

function SearchBar() {

    const[searchTerm,setSearchTerm]=useState("");

  return(
    <div className="container-fluid" style={{marginTop:"0px"}}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <div className="container justify-content-right">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group mb-3">
                        <input type="text"
                        className="form-control input-text no-outline"
                        placeholder="Where to?"
                        aria-label="enter location"
                        aria-describedby="basic-addon2"
                        style={{border: "no border"}}
                        onChange={
                        (e)=> {
                            setSearchTerm(e.target.value);
                        }
                        }
                        />
                            <div className="input-group-append">
                                <Link to="/Restaurants">
                                    <button className="btn btn-outline-success btn-lg" type="button" onClick={localStorage.setItem("location",searchTerm)}>
                                    <i className="fa fa-search"></i>
                                    </button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}

export default SearchBar;