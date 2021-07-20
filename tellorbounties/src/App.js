import React, { useState, useEffect } from "react";
//Ant D imports
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
//Data imports
import dataBounties from "./data/bountiesData.json";
//Component Imports
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ClaimModal from "./components/ClaimModal";

let initialJobForm = {
  jobTitle: "",
  jobType: "",
};

const App = () => {
  const [bountiesData, setBountiesData] = useState();
  const [jobForm, setJobForm] = useState(initialJobForm);

  useEffect(() => {
    // Commented out for development phase
    // const bountiesUrl =
    //   "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/bounties";
    // fetch(bountiesUrl)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     dataHelper(result.bounties);
    //   });
    dataHelper(dataBounties.bounties);
  }, []);

  const dataHelper = (unformattedData) => {
    let dataArray = [];
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
      if (obj.title) {
        dataArray.push(obj);
      }
    });
    setBountiesData(dataArray);
  };

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
      title: "Tributes",
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

  //Claim Modal Functions
  const openClaimModal = () => {
    const claimModal = document.getElementById("claimModal");
    claimModal.style.display = "block";
  };
  const closeClaimModal = () => {
    const claimModal = document.getElementById("claimModal");
    claimModal.style.display = "none";
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
        <ClaimModal closeClaimModal={closeClaimModal} jobForm={jobForm} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
