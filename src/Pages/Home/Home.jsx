import React from "react";
import "./Home.css";
import aboutImage from "../../assets/about.jpeg";
import image from "../../assets/image.jpeg";
import image1 from "../../assets/image2.jpeg";
import image2 from "../../assets/image3.png";
import image3 from "../../assets/image4.jpeg";
import image4 from "../../assets/image5.jpeg";
import image5 from "../../assets/image6.jpeg";
import image6 from "../../assets/image7.jpeg";
import image7 from "../../assets/image8.jpeg";
import image8 from "../../assets/image9.jpeg";
import image9 from "../../assets/image10.jpeg";
import image10 from "../../assets/image11.jpeg";
import image11 from "../../assets/image12.jpeg";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <h3>About Me</h3>
          <p>
            I am a tiger mom, ultra runner, marathon and wellness coach. I help
            people to tranform their body & guide people who to run a marathon.
          </p>
        </div>
        <div className="right">
          <figure>
            <img src={aboutImage} alt="" />
          </figure>
        </div>
      </div>
      <div className="photo-gallery">
        <figure>
          <img src={image} alt="" />
        </figure>
        <figure>
          <img src={image1} alt="" />
        </figure>
        <figure>
          <img src={image2} alt="" />
        </figure>
        <figure>
          <img src={image3} alt="" />
        </figure>
        <figure>
          <img src={image4} alt="" />
        </figure>{" "}
        <figure>
          <img src={image5} alt="" />
        </figure>{" "}
        <figure>
          <img src={image6} alt="" />
        </figure>{" "}
        <figure>
          <img src={image7} alt="" />
        </figure>{" "}
        <figure>
          <img src={image8} alt="" />
        </figure>
        <figure>
          <img src={image9} alt="" />
        </figure>
        <figure>
          <img src={image10} alt="" />
        </figure>
        <figure>
          <img src={image11} alt="" />
        </figure>
      </div>
    </>
  );
};
