import React, { useState, useEffect } from "react";
//Data imports
import dataHacks from "../data/hacks.json";
//Ant Design
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

function HacksTable() {
  const [hacksData, setHacksData] = useState();

  useEffect(() => {
    // Commented out for development phase
    //   const hacksUrl = "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/hacks";
    //   fetch(hacksUrl)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       dataHelper(result.hacks);
    //     });
    dataHelper(dataHacks.hacks);
  }, []);

  const dataHelper = (unformattedData) => {
    let data = [];
    unformattedData.forEach((hData) => {
      let obj = {
        key: hData.id,
        hacks: hData.hacks ? hData.hacks : null,
        tributes: hData.tributes ? hData.tributes : null,
        available: hData.available ? hData.available : null,
        description: hData.description ? hData.description : null,
        skills: hData.skills ? hData.skills : null,
        notes: hData.notes ? hData.notes : null,
      };
      data.push(obj);
    });
    setHacksData(data);
  };

  const hacksColumns = [
    { title: "Hacks", dataIndex: "hacks", key: "hacks" },
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
      <h1>Hacks</h1>
      <h3>Click the {<PlusCircleOutlined />} for more information</h3>
      <Table
        pagination={{ pageSize: 5 }}
        columns={hacksColumns}
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
        dataSource={hacksData}
      />
    </div>
  );
}

export default HacksTable;
