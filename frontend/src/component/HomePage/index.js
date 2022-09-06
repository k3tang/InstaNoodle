import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import splashPic from '../../assets/splash-pic.png';

const HomePage = () => {
  
    return (
        <>  
        <div id="splash-page">
            <div id="splash-text">
                <h1>
                    NUTRITIONALLY COMPLETE INSTANT NOODLES
                </h1>
                <h2>
                    Plant-based instant noodles that are healthy for you and our planet.
                </h2>
                <p>
                    <a href="/products">Check it out</a>
                </p>
                
            </div>
            <div id="splash-pic">
                <img src={splashPic} alt= "noodles in bowl" />
            </div>
        </div>
        </>
       
    )
}

export default HomePage;