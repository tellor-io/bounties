import React, { useState, useEffect } from "react";
//Data imports
import dataBuilds from "../data/builds.json";
//Ant Design
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

function BuildsTable() {
  const [buildsData, setBuildsData] = useState();

  useEffect(() => {
    // Commented out for development phase
    //   const buildsUrl = "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/builds";
    //   fetch(buildsUrl)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       dataHelper(result.builds);
    //     });
    dataHelper(dataBuilds.builds);
  }, []);

  const dataHelper = (unformattedData) => {
    let data = [];
    unformattedData.forEach((bdata) => {
      let obj = {
        key: bdata.id,
        builds: bdata.builds ? bdata.builds : null,
        tributes: bdata.tributes ? bdata.tributes : null,
        available: bdata.available ? bdata.available : null,
        description: bdata.description ? bdata.description : null,
        skills: bdata.skills ? bdata.skills : null,
        notes: bdata.notes ? bdata.notes : null,
      };
      data.push(obj);
    });
    setBuildsData(data);
  };

  const buildsColumns = [
    { title: "Builds", dataIndex: "builds", key: "builds" },
    { title: "Tributes", dataIndex: "tributes", key: "tributes" },
    { title: "Available", dataIndex: "available", key: "available" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <Button>Claim</Button>,
    },
  ];

  return (
    <div className="Builds__Container">
      <h1>Builds</h1>
      <h3>Click the {<PlusCircleOutlined />} for more information</h3>
      <Table
        pagination={{ pageSize: 5 }}
        columns={buildsColumns}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <p style={{ margin: 0 }}>
                Build Description:{" "}
                {record.description ? record.description : "N/A"}
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
        dataSource={buildsData}
      />
    </div>
  );
}

export default BuildsTable;
