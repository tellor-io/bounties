import React from "react";

//Component Imports
import Header from "./components/Header.js";
import Welcome from "./components/Welcome.js";
import BuildsTable from "./components/BuildsTable";
import HacksTable from "./components/HacksTable";
import DeeperResearchTable from "./components/DeeperResearchTable";
import ContentTable from "./components/ContentTable";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className="App">
      <div className="App__Container">
        <Header />
        <Welcome />
        <BuildsTable />
        <HacksTable />
        <DeeperResearchTable />
        <ContentTable />
      </div>
      <Footer />
    </div>
  );
};

export default App;
