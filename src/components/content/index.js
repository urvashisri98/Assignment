import React from "react";
import Animalimage from "../../images/petanimal.png";
import Animalimage2 from "../../images/image3.jpg";
import "./style.css";
const Content = () => {
  return (
    <>
      <div className="content-container">
        <div className="content-text">
          <label className="first-content">
            Until one has loved an animal, a part of one's soul remains
            unawakened
          </label>
          <label className="second-content">
            Pet Veterinary here for love,health and happiness-and with free
            first visit for you pet.Can't wait to meet you both.
          </label>
        </div>
        <div className="content-image">
          <img src={Animalimage} alt="" />
        </div>
      </div>
      <div className="content-container">
        <div className="content-image">
          <img src={Animalimage2} alt="" className="image2-css" />
        </div>
        <div className="content-text">
          <label className="first-content">
            Until one has loved an animal, a part of one's soul remains
            unawakened
          </label>
          <label className="second-content">
            Pet Veterinary here for love,health and happiness-and with free
            first visit for you pet.Can't wait to meet you both.
          </label>
        </div>
      </div>
    </>
  );
};

export default Content;
