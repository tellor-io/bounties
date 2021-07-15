import React, { useState, useEffect } from "react";
//Design imports
import { ReactComponent as TellorBounties } from "../assets/tellorbounties_renogare.svg";
import { Button } from "antd";
//Data imports
import dataTellorBountiesAvailable from "../data/tellorBountiesAvailable.json";

function Header() {
  const [tellorBountiesAvailableData, setTellorBountiesAvailableData] =
    useState();

  useEffect(() => {
    // Use for later when using the API again

    //   const tellorBountiesAvailableUrl =
    //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/tellorBountiesAvailable";
    //   fetch(tellorBountiesAvailableUrl)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       setTellorBountiesAvailableData(result.tellorBountiesAvailable);
    //     });
    setTellorBountiesAvailableData(
      dataTellorBountiesAvailable.tellorBountiesAvailable
    );
  }, []);

  return (
    <div className="Header">
      <TellorBounties />
      {tellorBountiesAvailableData &&
        tellorBountiesAvailableData.map((data) => {
          return (
            <div className="Available__Bounties" key={data.id}>
              <div>
                <h2>Tellor Bounties Available</h2>
                <h4>{data.description}</h4>
              </div>
              <Button>{data.tellorBountiesAvailable}</Button>
            </div>
          );
        })}
    </div>
  );
}

export default Header;
