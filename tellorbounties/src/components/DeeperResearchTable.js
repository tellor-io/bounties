import React, { useState, useEffect } from "react";
//Data imports
import dataDeeperResearch from "../data/deeperResearch.json";
//Ant Design
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

function DeeperResearchTable() {
  const [deeperResearchData, setDeeperResearchData] = useState();

  useEffect(() => {
    // Commented out for development phase
    //   const deeperResearchUrl = "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/deeperResearch";
    //   fetch(deeperResearchUrl)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       dataHelper(result.deeperResearch);
    //     });
    dataHelper(dataDeeperResearch.deeperResearch);
  }, []);

  const dataHelper = (unformattedData) => {
    let data = [];
    unformattedData.forEach((dRData) => {
      let obj = {
        key: dRData.id,
        deeperResearch: dRData.deeperResearch ? dRData.deeperResearch : null,
        tributes: dRData.tributes ? dRData.tributes : null,
        available: dRData.available ? dRData.available : null,
        description: dRData.description ? dRData.description : null,
        skills: dRData.skills ? dRData.skills : null,
        notes: dRData.notes ? dRData.notes : null,
      };
      data.push(obj);
    });
    setDeeperResearchData(data);
  };

  const deeperResearchColumns = [
    {
      title: "Deeper Research",
      dataIndex: "deeperResearch",
      key: "deeperResearch",
    },
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
    <div className="Table__Container__Middle">
      <h1>Deeper Research</h1>
      <h3>Click the {<PlusCircleOutlined />} for more information</h3>
      <Table
        pagination={{ pageSize: 5 }}
        columns={deeperResearchColumns}
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
        dataSource={deeperResearchData}
      />
    </div>
  );
}

export default DeeperResearchTable;
