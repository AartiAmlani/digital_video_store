import React from "react";
import "../assets/css/Slider.css";
import leftArrow from "../assets/images/leftarrowicon.png";
import rightArrow from "../assets/images/rightarrowicon.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
    //   onClick={}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
