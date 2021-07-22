import React, { useState, useEffect } from "react";
//Design imports
import { ReactComponent as TellorBounties } from "../assets/tellorbounties_renogare.svg";
import { Button } from "antd";
//Component imports
import Welcome from "./Welcome.js";

function Header() {
  const [tellorBountiesAvailableData, setTellorBountiesAvailableData] =
    useState();

  //useEffect to call the Sheety API to render proper amount of available Tellor Bounties
  useEffect(() => {
    const tellorBountiesAvailableUrl =
      "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/tellorBountiesAvailable";
    fetch(tellorBountiesAvailableUrl)
      .then((response) => response.json())
      .then((result) => {
        setTellorBountiesAvailableData(result.tellorBountiesAvailable);
      });

    //Modal Pop-Up after 2 seconds
    setTimeout(() => {
      const modal = document.getElementById("Modal");
      modal.classList.add("fadeIn");
      modal.style.display = "block";
    }, 2000);
    setTimeout(() => {
      const modal = document.getElementById("Modal");
      modal.classList.remove("fadeIn");
    }, 4000);
  }, []);

  //Modal Open/Close Functions
  const openModal = () => {
    const modal = document.getElementById("Modal");
    modal.style.display = "block";
  };
  const closeModal = () => {
    const modal = document.getElementById("Modal");
    modal.style.display = "none";
  };

  return (
    <div className="Header">
      <TellorBounties />
      {tellorBountiesAvailableData &&
        tellorBountiesAvailableData.map((data) => {
          return (
            <div className="Available__Bounties" key={data.id}>
              <h2>Tellor Bounties Available</h2>
              <Button>{data.tellorBountiesAvailable}</Button>
              <h4>{data.description}</h4>
            </div>
          );
        })}
      <Button id="openModalButton" onClick={openModal}>
        Ground Rules
      </Button>
      <div id="Modal" className="Modal">
        <Welcome closeModal={closeModal} />
      </div>
    </div>
  );
}

export default Header;
