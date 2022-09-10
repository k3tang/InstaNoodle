import React from "react";
import "./homepage.css";
import splashPic from '../../assets/splash-pic.png';
import ScrollTwo from "./scrolltwo";
import CartIndexPage from "../CartIndexPage"

const HomePage = () => {
  
    return (
        <>  
        <div id="splash-page">
            <div id="splash-text">
                <h1>
                    Nutritionally Complete Instant Noodles
                </h1>
                <h2>
                    Plant-based instant noodles that are healthy for you and our planet.
                </h2>
                <p id="splash-button">
                    <a href="/products">Check it out</a>
                </p>
                
            </div>
            <div id="splash-pic">
                <img src={splashPic} alt= "noodles in bowl" />
            </div>
        </div>
        <div id="second-scroll">
            <ScrollTwo />
        </div>
        <div id="hidden-cart"><CartIndexPage /></div>
        </>
       
    )
}

export default HomePage;