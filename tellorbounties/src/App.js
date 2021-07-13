import React, { useState, useEffect } from "react";
// Data Imports
import dataBounties from "./data/bountiesData.json";
import dataContent from "./data/content.json";
import dataDeeperResearch from "./data/deeperResearch.json";
import dataHacks from "./data/hacks.json";

//Ant D
// import { Button, Table } from "antd";

//Component Imports
import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import BuildsTable from "./components/BuildsTable";
import HacksTable from "./components/HacksTable";
import Footer from "./components/Footer.js";

const App = () => {
  const [bountiesData, setBountiesData] = useState();
  const [contentData, setContentData] = useState();
  const [deeperResearchData, setDeeperReseachData] = useState();

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

  // }, []);

  useEffect(() => {
    setBountiesData(dataBounties.bounties);
    setContentData(dataContent.content);
    setDeeperReseachData(dataDeeperResearch.deeperResearch);
  }, []);

  return (
    <div className="App">
      <div className="App__Container">
        <Header />
        <Welcome />
        <BuildsTable />
        <HacksTable />
        {/*
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
          })} */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
