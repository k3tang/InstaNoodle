import React from "react";
import "./index.css";
import profilePic from "../../assets/about-profile.png";
import karenPic from "../../assets/karen-pic.png";
import feature5 from "../../assets/feature-pics/feature5.png";

const AboutPage = () => {

    return (
        <>  
        <div className="about-page" id="carl-about-page">
            <img src={profilePic} alt="profile-pic-carl"/>
            <div className="carl-profile-text">
                <h1 className="profile-header">Peace, love, and noodles.</h1>
                <div className="profile-desc">We hope these little pots of noodles put a big smile on your face. It’s been an incredible journey so far and we are extremely grateful to everyone for supporting us in these early days.
                <br></br>
                <br></br>
                So thank you for believing in our dream to make super healthy, plant-based and planet friendly instant noodles like never before. This is just the start and we won't get everything right, so please help us get better.
                <br></br>
                <br></br>
                Carl & Team Noodz</div>
            </div>
        </div>
        <div className="about-page" id="karen-about-page">
            <div className="karen-profile-text">
                <h1 className="profile-header">All about the noodle bytes</h1>
                    <div className="profile-desc">Thank you to the team at FutureNoodles for inspiring this website clone! This is Karen here, fellow instant noodle enthusiast, master water boiler and time keeper. I am a full-stack software engineer with experience in Javascript, React, Redux, Node, Ruby on Rails, and PostgresQL. I am interested in promoting web service accessibility through intuitive user interfaces. 
                    <br></br>
                    <br></br>
                    As a nurse practitioner turned computer programmer, I am interested in the intersection of technology and health management and its potential to promote greater wellness in our communities.
                    <br></br>
                    <br></br>
                    Karen Siu</div>
            </div>
            <img src={karenPic} alt="profile-pic-karen"/>
        </div>
        <div className="mission-state">
            <h1 id="mission-title">Our Mission</h1>
            <h2 id="mission-desc">WE'RE MAKING OUR PLANET HEALTHIER ONE NOODLE AT A TIME.</h2>
            <img id="mission-img" src={feature5} alt="saturn-picture"/>
        </div>
        </>
        
    )
}

export default AboutPage;

