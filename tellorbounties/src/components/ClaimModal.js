import React, { useState } from "react";
import { Button } from "antd";

function ClaimModal({ closeClaimModal, jobForm }) {
  const [formValues, setFormValues] = useState({});

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({});
    closeClaimModal();
  };

  return (
    <div className="Claim">
      <div className="Claim__Header">
        <h1>Claim a Bounty!</h1>
        <span onClick={closeClaimModal}>&times;</span>
      </div>
      <form className="Claim__Form" onSubmit={handleFormSubmit}>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              defaultValue={jobForm.jobTitle}
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              readOnly
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="jobType">Job Type</label>
            <input
              defaultValue={jobForm.jobType}
              type="text"
              name="jobType"
              placeholder="Job Type"
              readOnly
            />
          </div>
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleFormChange}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleFormChange}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="CF__Long__Input">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleFormChange}
            type="text"
            name="email"
            className="Claim__Modal__Input"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="discord">Discord</label>
            <input
              onChange={handleFormChange}
              type="text"
              name="discord"
              placeholder="Enter Your Discord Tag"
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="telegram">Telegram</label>
            <input
              onChange={handleFormChange}
              type="text"
              name="telegram"
              placeholder="Enter Your Telegram Handle"
            />
          </div>
        </div>
        <div className="CF__Long__Input">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            onChange={handleFormChange}
            type="text"
            name="comments"
            className="Claim__Modal__Input"
            placeholder="Add your comments here"
          />
        </div>
        <Button onClick={handleFormSubmit} className="Claim__Button">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ClaimModal;
