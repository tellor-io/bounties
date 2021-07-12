import React, { useState, useEffect } from "react";
// Data Imports
import dataBounties from "./data/bountiesData.json";
import dataBuilds from "./data/builds.json";
import dataContent from "./data/content.json";
import dataDeeperResearch from "./data/deeperResearch.json";
import dataHacks from "./data/hacks.json";
import dataTellorBountiesAvailable from "./data/tellorBountiesAvailable.json";

//Component Imports
import Footer from "./components/Footer.js";
import Welcome from "./components/Welcome";

const App = () => {
  const [bountiesData, setBountiesData] = useState();
  const [buildsData, setBuildsData] = useState();
  const [contentData, setContentData] = useState();
  const [deeperResearchData, setDeeperReseachData] = useState();
  const [hacksData, setHacksData] = useState();
  const [tellorBountiesAvailableData, setTellorBountiesAvailableData] =
    useState();

  //Commented out for now to not make unnecessary api calls during development
  // useEffect(() => {
  //   const welcomeUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/welcome";
  //   fetch(welcomeUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setWelcomeData(result.welcome);
  //     });

  //   const bountiesUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/bounties";
  //   fetch(bountiesUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.bounties);
  //     });

  //   const buildsUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/builds";
  //   fetch(buildsUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.builds);
  //     });

  //   const contentUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/content";
  //   fetch(contentUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.content);
  //     });

  //   const deeperResearchUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/deeperResearch";
  //   fetch(deeperResearchUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.deeperResearch);
  //     });

  //   const hacksUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/hacks";
  //   fetch(hacksUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.hacks);
  //     });

  //   const tellorBountiesAvailableUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/tellorBountiesAvailable";
  //   fetch(tellorBountiesAvailableUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.tellorBountiesAvailable);
  //     });
  // }, []);

  useEffect(() => {
    setBountiesData(dataBounties.bounties);
    setBuildsData(dataBuilds.builds);
    setContentData(dataContent.content);
    setDeeperReseachData(dataDeeperResearch.deeperResearch);
    setHacksData(dataHacks.hacks);
    setTellorBountiesAvailableData(
      dataTellorBountiesAvailable.tellorBountiesAvailable
    );
  }, []);

  console.log(buildsData);
  console.log(contentData);
  console.log(deeperResearchData);
  console.log(hacksData);
  console.log(tellorBountiesAvailableData);

  return (
    <div className="App">
      <div className="App__Container">
        <h1>Tellor Bounties</h1>
        <Welcome />
        <hr />
        {tellorBountiesAvailableData &&
          tellorBountiesAvailableData.map((data) => {
            return (
              <div key={data.id}>
                <h2>Tellor Bounties Available</h2>
                <h3>{data.tellorBountiesAvailable}</h3>
                <h4>{data.description}</h4>
              </div>
            );
          })}
        <hr />
        {buildsData &&
          buildsData.map((data) => {
            return (
              <div key={data.id}>
                <h2>{data.builds ? data.builds : null}</h2>
                <h3>{data.tributes ? data.tributes : null}</h3>
                <h4>{data.available ? data.available : null}</h4>
                <div>
                  <p>{data.description ? data.description : null}</p>
                  <p>{data.skills ? data.skills : null}</p>
                  <p>{data.notes ? data.notes : null}</p>
                </div>
              </div>
            );
          })}
        <hr />
        {contentData &&
          contentData.map((data) => {
            return (
              <div key={data.id}>
                <h2>{data.content ? data.content : null}</h2>
                <h3>{data.tributes ? data.tributes : null}</h3>
                <h4>{data.available ? data.available : null}</h4>
                <div>
                  <p>{data.description ? data.description : null}</p>
                  <p>{data.skills ? data.skills : null}</p>
                  <p>{data.notes ? data.notes : null}</p>
                </div>
              </div>
            );
          })}
        <hr />
        {deeperResearchData &&
          deeperResearchData.map((data) => {
            return (
              <div key={data.id}>
                <h2>{data.deeperResearch ? data.deeperResearch : null}</h2>
                <h3>{data.tributes ? data.tributes : null}</h3>
                <h4>{data.available ? data.available : null}</h4>
                <div>
                  <p>{data.description ? data.description : null}</p>
                  <p>{data.skills ? data.skills : null}</p>
                  <p>{data.notes ? data.notes : null}</p>
                </div>
              </div>
            );
          })}
        <hr />
        {hacksData &&
          hacksData.map((data) => {
            return (
              <div key={data.id}>
                <h2>{data.hacks ? data.hacks : null}</h2>
                <h3>{data.tributes ? data.tributes : null}</h3>
                <h4>{data.available ? data.available : null}</h4>
                <div>
                  <p>{data.description ? data.description : null}</p>
                  <p>{data.skills ? data.skills : null}</p>
                  <p>{data.notes ? data.notes : null}</p>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
