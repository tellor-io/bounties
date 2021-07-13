import React, { useState, useEffect } from "react";
//Data imports
import dataContent from "../data/content.json";
//Ant Design
import { Button, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

function ContentTable() {
  const [contentData, setContentData] = useState();

  useEffect(() => {
    // Commented out for development phase
    //   const contentUrl = "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/content";
    //   fetch(contentUrl)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       dataHelper(result.content);
    //     });
    dataHelper(dataContent.content);
  }, []);

  const dataHelper = (unformattedData) => {
    let data = [];
    unformattedData.forEach((cData) => {
      let obj = {
        key: cData.id,
        content: cData.content ? cData.content : null,
        tributes: cData.tributes ? cData.tributes : null,
        available: cData.available ? cData.available : null,
        description: cData.description ? cData.description : null,
        skills: cData.skills ? cData.skills : null,
        notes: cData.notes ? cData.notes : null,
      };
      data.push(obj);
    });
    setContentData(data);
  };

  const contentColumns = [
    { title: "Content", dataIndex: "content", key: "content" },
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
    <div className="Table__Container__Bottom ">
      <h1>Content</h1>
      <h3>Click the {<PlusCircleOutlined />} for more information</h3>
      <Table
        pagination={{ pageSize: 5 }}
        columns={contentColumns}
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
        dataSource={contentData}
      />
    </div>
  );
}

export default ContentTable;
