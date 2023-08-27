import React from 'react';
import './wheel.css';

const Wheel = () => {
  const rotateFunction = () => {
    let min = 1024;
    let max = 9999;
    let degr = Math.floor(Math.random() * (max - min)) + min;
    let initialRotation = 45;

    document.getElementById('box').style.transform = `rotate(${degr + initialRotation}deg)`;
  };

  const getWinningSlice = (actualDeg) => {
    let slices = document.querySelectorAll(".box1 span, .box2 span");
    let sliceAngle = 360 / slices.length;

    let sliceIndex = Math.floor(actualDeg / sliceAngle);

    return slices[sliceIndex];
  };

  const handleBtnClick = () => {
    let deg = Math.floor(Math.random() * 10000);
    let box = document.querySelector(".box");
    
    box.style.transition = "all 10s ease-out";
    box.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => {
      box.style.transition = "none";
      let actualDeg = deg % 360;
      box.style.transform = `rotate(${actualDeg}deg)`;

      let winningSlice = getWinningSlice(actualDeg);
      if (winningSlice) {
        let winningValue = winningSlice.getAttribute("data-value");

        let popup = document.getElementById("popup");
        let popupHeading = document.getElementById("popup-heading");
        let popupText = document.getElementById("popup-text");
        let popupLink = document.getElementById("popup-link");

        popupHeading.textContent = "Get ready for a taste of... " + winningValue;
        popupText.textContent = "Visit the " + winningValue + " page by clicking below.";

        if (winningValue === "Europe") {
          popupLink.href = "https://example.com/europe";
        } else if (winningValue === "North America") {
          popupLink.href = "https://example.com/north-america";
        } else if (winningValue === "South America") {
          popupLink.href = "https://example.com/south-america";
        } else if (winningValue === "Central America") {
          popupLink.href = "https://example.com/central-america";
        } else if (winningValue === "Middle East") {
          popupLink.href = "https://example.com/middle-east";
        } else if (winningValue === "Asia") {
          popupLink.href = "https://example.com/asia";
        } else if (winningValue === "Oceania") {
          popupLink.href = "https://example.com/oceania";
        } else if (winningValue === "Caribbean") {
          popupLink.href = "https://example.com/caribbean";
          }

        popup.style.display = "block";
      }
    }, 10000);
  };

  return (
    <div id="box" className="box">
      <div className="box1">
        <span className="span1" data-value="Europe"><b>Europe</b></span>
        <span className="span2" data-value="North America"><b>North America</b></span>
        <span className="span3" data-value="South America"><b>South America</b></span>
        <span className="span4" data-value="Central America"><b>Cent. America</b></span>
      </div>
      <div className="box2">
        <span className="span1" data-value="Middle East"><b>Middle East</b></span>
        <span className="span2" data-value="Asia"><b>Asia</b></span>
        <span className="span3" data-value="Oceania"><b>Oceania</b></span>
        <span className="span4" data-value="Caribbean"><b>Caribbean</b></span>
      </div>
      <button className="spin" onClick={handleBtnClick}>SPIN</button>
    </div>
  );
};

export default Wheel;

