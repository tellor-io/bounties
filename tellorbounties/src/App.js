import React, { useState, useEffect } from "react";
// Data Imports
import dataBounties from "./data/bountiesData.json";
import dataBuilds from "./data/builds.json";
import dataContent from "./data/content.json";
import dataDeeperResearch from "./data/deeperResearch.json";
import dataHacks from "./data/hacks.json";
import dataTellorBountiesAvailable from "./data/tellorBountiesAvailable.json";
import { ReactComponent as TellorBounties } from "./assets/tellorbounties.svg";

//Ant D
import { Button, Table } from "antd";

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

  const columns = [
    { title: "Builds", dataIndex: "builds", key: "builds" },
    { title: "Tributes", dataIndex: "tributes", key: "tributes" },
    { title: "Available", dataIndex: "available", key: "available" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Claim</a>,
    },
  ];

  const data = [
    {
      key: 4,
      builds: "Misc Miner issues",
      tributes: 3000,
      available: "yes",
      description: "work on Tellor miner issues (flexible amount)",
      skills: "golang",
      notes: "https://github.com/tellor-io/TellorMiner",
    },
    {
      key: 3,
      builds: "Improved Golang database testing",
      tributes: 1000,
      available: "no",
      description: "Further testing for edge cases in returned API values",
      skills: null,
      notes: null,
    },
    {
      key: 5,
      builds: "Tellor Miner Documentation",
      tributes: 250,
      available: "yes",
      description: "Work on Tellor miner documentation (red the docs)",
      skills: null,
      notes: null,
    },
  ];

  // DYNAMIC RENDERING OF BOUNTIES DATA TO POPULATE ANT D TABLE
  // let tableData = [];

  // const dataHelper = () => {
  //   buildsData &&
  //     buildsData.map((data) => {
  //       const dataObject = {
  //         key: data.id,
  //         builds: data.builds ? data.builds : null,
  //         tributes: data.tributes ? data.tributes : null,
  //         description: data.description ? data.description : null,
  //         skills: data.skills ? data.skills : null,
  //         notes: data.notes ? data.notes : null,
  //       };
  //       tableData.push(dataObject);
  //     });
  // };

  // console.log(tableData);

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
    // dataHelper();
  }, []);

  return (
    <div className="App">
      <div className="App__Container">
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
        <Welcome />
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <p style={{ margin: 0 }}>
                  Build Description: {record.description}
                </p>
                <p style={{ margin: 0 }}>Necessary Skill(s): {record.skills}</p>
                <p style={{ margin: 0 }}>Notes: {record.notes}</p>
              </>
            ),
            rowExpandable: (record) => record.builds !== "Not Expandable",
          }}
          dataSource={data}
        />
        {/*
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
          })} */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
