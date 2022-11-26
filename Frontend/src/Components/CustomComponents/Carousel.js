import React from 'react'
import {Grid} from '@mui/material'

const Carousel = () => {

    return (
        <Grid id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block" src="https://travelbuddy295.s3.us-west-1.amazonaws.com/res1.jpeg" alt="First slide" style={{width:"100%",height:"400px"}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block" src="https://travelbuddy295.s3.us-west-1.amazonaws.com/res1_2.jpeg" alt="Second slide"style={{width:"100%",height:"400px"}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block" src="https://travelbuddy295.s3.us-west-1.amazonaws.com/res1_3.jpeg" alt="Third slide" style={{width:"100%",height:"400px"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </Grid>
    )
}

export default Carousel;
