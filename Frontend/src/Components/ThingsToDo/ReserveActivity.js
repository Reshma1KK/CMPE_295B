import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NavBar from '../NavBar/NavBar.js';
import {Grid,Rating} from "@mui/material"
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './ReserveActivity.css'

const ReserveActivity = () => {

    const[activity,setActivity]=useState([]);

    useEffect(() => {
        ReserveActivity();
      },[]);
  
      const ReserveActivity = () =>{
          const name = localStorage.getItem("activityName");
        axios.get(`http://localhost:3001/reserveActivity/${name}`)
        .then((response) => {
          console.log(response.data[0])
          const request = response.data[0];
          setActivity(request);
      }).catch(error =>
      console.error("error:", error))
      }

    return (
        <>
            <NavBar/>
            <div className="activity-container" style={{paddingTop:"5%",paddingLeft:"5%"}}>
                <Grid className="activity-child" xs={4} md={4}>
                    <img src={activity.image} style={{width:"100%",height:"500px"}}></img>
                </Grid>
                <Grid className="activity-child" xs={4} md={8}>
                    <h1>{activity.name}</h1>
                    <Rating
                        value={Number(activity.reviews)}
                        precision={0.5}
                        max={5}
                        name="hover-feedback"
                        sx={{
                            '& .MuiRating-iconFilled': {
                              color: 'green',
                            }
                          }}
                        readOnly
                    />
                    <div>
                        <h6 style={{width:"600px",paddingTop:"20px"}}>{activity.about}</h6>
                    </div>
                    <div>
                        <h5 style={{paddingTop:"20px", fontWeight:"bold"}}>Cost: {activity.cost}</h5>
                    </div>
                    <div className="small-container">
                        <p><PeopleIcon/></p>
                        <p>{activity.age}</p>
                    </div>
                    <div className="small-container">
                        <p><AccessTimeIcon/></p>
                        <p>Duration: {activity.duration}</p>
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default ReserveActivity
