import React from "react";
import AnimatedImage from "../Assests/Animated-img.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div className="Home-left">
        <div className=" home-text-1">Twillo SendGrid</div>
        <div className=" home-text-2">
          Deliver Exceptional
          <br className="break" /> Email
          <br className="break1" /> <br className="break" /> Experiences{" "}
          <br className="break" />
          with <br className="break" /> SendGrid
        </div>
        <div className="home-text-3">
          Leverage the email service that customer-first brands trust for{" "}
          <br className="break1" />
          reliable <br className="break" /> inbox delivery at scale.
        </div>
        <div>
          <span id="plan-btn">See Plan & Pricing</span>
        </div>
        <div className="start-arrow">Start for free &rarr;</div>
      </div>
      <div className="Home-right">
        <img src={AnimatedImage} alt="img" id="ani-img" />
      </div>
    </div>
  );
};

export default Home;
