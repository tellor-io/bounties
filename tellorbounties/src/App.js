import React, { useState, useEffect } from "react";
//Ant D imports
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
//Component Imports
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ClaimModal from "./components/ClaimModal";

const App = () => {
  let initialJobForm = {
    jobTitle: "",
    jobType: "",
  };

  const [bountiesData, setBountiesData] = useState();
  const [jobForm, setJobForm] = useState(initialJobForm);

  //useEffect to populate the table with data from the Sheety API
  useEffect(() => {
    const bountiesUrl =
      "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/bounties";
    fetch(bountiesUrl)
      .then((response) => response.json())
      .then((result) => {
        dataHelper(result.bounties);
      });
  }, []);

  //DataHelper function to get Sheety API data into proper form for the AntD Table
  const dataHelper = (unformattedData) => {
    let dataArray = [];
    let randomBountyObj = {
      key: 100,
      title: "Suggest A Bounty",
      jobType: "Various",
      tributes: "Various",
      available: "Yes",
      description:
        "Have a suggestion? After you claim this bounty, let us know about your idea on how to expand Tellor in the comments section!",
    };
    unformattedData.forEach((data) => {
      let obj = {
        key: data.id,
        title: data.bountiesTitle ? data.bountiesTitle : null,
        jobType: data.bountiesType ? data.bountiesType : null,
        tributes: data.tributes ? data.tributes : null,
        available: data.available ? data.available : null,
        description: data.description ? data.description : null,
        skills: data.skills ? data.skills : null,
        notes: data.notes ? data.notes : null,
      };
      if (obj.title && obj.jobType) {
        dataArray.push(obj);
      }
    });
    dataArray.push(randomBountyObj);
    setBountiesData(dataArray);
  };

  //AntD Column Logic
  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Bounty",
      dataIndex: "tributes",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.tributes - b.tributes,
    },
    {
      title: "Available",
      dataIndex: "available",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Button id="claimModalButton" onClick={openClaimModal}>
          Claim
        </Button>
      ),
    },
  ];

  //Claim Modal Function
  const openClaimModal = () => {
    const claimModal = document.getElementById("claimModal");
    claimModal.style.display = "block";
  };
  //Window function to help close modals
  window.onclick = (event) => {
    const claimModal = document.getElementById("claimModal");
    const modal = document.getElementById("Modal");
    if (event.target === claimModal) {
      claimModal.style.display = "none";
    } else if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div className="App">
      <div className="App__Container">
        <Header />
        <Table
          pagination={false}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => {
                setJobForm({
                  jobTitle: record.title,
                  jobType: record.jobType,
                });
              },
            };
          }}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <p style={{ margin: 0 }}>
                  Description: {record.description ? record.description : "N/A"}
                </p>
                <p style={{ margin: 0 }}>
                  Necessary Skill(s): {record.skills ? record.skills : "N/A"}
                </p>
                <p style={{ margin: 0 }}>
                  Notes:
                  <a style={{ marginLeft: "5px" }} href={record.notes}>
                    {record.notes ? record.notes : "N/A"}
                  </a>
                </p>
              </>
            ),
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <MinusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ) : (
                <PlusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ),
            rowExpandable: (record) => record.builds !== "Not Expandable",
          }}
          dataSource={bountiesData}
        />
      </div>
      <div id="claimModal" className="Claim__Modal">
        <ClaimModal jobForm={jobForm} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
