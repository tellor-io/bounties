import React from "react";
import { Button } from "antd";

function ClaimModal({ closeClaimModal }) {
  return (
    <div className="Claim">
      <div className="Claim__Header">
        <h1>Claim a Bounty!</h1>
        <span onClick={closeClaimModal}>&times;</span>
      </div>
      <form>
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" placeholder="Job Title" />
          </div>
          <div>
            <label htmlFor="jobType">Job Type</label>
            <input type="text" name="jobType" placeholder="Job Type" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Enter Your Email" />
            <label htmlFor="discord">Discord</label>
            <input
              type="text"
              name="discord"
              placeholder="Enter Your Discord Tag"
            />
            <label htmlFor="telegram">Telegram</label>
            <input
              type="text"
              name="telegram"
              placeholder="Enter Your Telegram Handle"
            />
          </div>
          <div>
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              type="text"
              name="comments"
              placeholder="Add your comments here"
            />
          </div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default ClaimModal;
