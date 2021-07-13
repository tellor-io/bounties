import React, { useState, useEffect } from "react";
// Data Imports
import dataContent from "./data/content.json";

//Ant D
// import { Button, Table } from "antd";

//Component Imports
import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import BuildsTable from "./components/BuildsTable";
import HacksTable from "./components/HacksTable";
import DeeperResearchTable from "./components/DeeperResearchTable";
import Footer from "./components/Footer.js";

const App = () => {
  const [contentData, setContentData] = useState();

  //   const contentUrl =
  //     "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/content";
  //   fetch(contentUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBountiesData(result.content);
  //     });

  useEffect(() => {
    setContentData(dataContent.content);
  }, []);

  return (
    <div className="App">
      <div className="App__Container">
        <Header />
        <Welcome />
        <BuildsTable />
        <HacksTable />
        <DeeperResearchTable />
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
          })} */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
