import React, { useState, useEffect } from "react";
import { Button } from "antd";
import * as yup from "yup";
import formSchema from "./ClaimFormSchema.js";

function ClaimModal({ jobForm }) {
  let initialFormValues = {
    jobTitle: jobForm.jobTitle,
    jobType: jobForm.jobType,
    firstName: "",
    lastName: "",
    email: "",
    discord: "",
    telegram: "",
    comments: "",
  };
  let initialErrorValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  //Setting Form Values to include jobTitle and jobType from previous screen.
  const [formValues, setFormValues] = useState(initialFormValues);
  //Setting Form Errors
  const [errors, setErrors] = useState(initialErrorValues);
  //Setting the button to be disabled until formSchema are met.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //yup validation for when user updates the form's values
  const validateFormChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //Setting Claim Modal Form Values upon first render
  useEffect(() => {
    setFormValues(initialFormValues);
  }, [jobForm]); //eslint-disable-line

  //useEffect dependent on whether formValues are meeting yup validation requirements.
  //If so, valid now equals TRUE and we setButtonDisabled to be the opposite (FALSE)
  //so that the button is no longer disabled.
  //If formValues are NOT meeting yup validation requirements, valid is equal to FALSE,
  //and we setButtonDisabled to be the opposite (TRUE), and then the button will be disabled.
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setButtonDisabled(!valid));
  }, [formValues]);

  //Handles changing input from the user
  //Also compares user input to yup formSchema validation.
  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    validateFormChange(e);
  };

  //Close Claim Modal function that also resets error messages
  const closeClaimModal = () => {
    const claimModal = document.getElementById("claimModal");
    claimModal.style.display = "none";
    setErrors(initialErrorValues);
  };
  //Chain of functions that run when user hits the submit button
  const handleFormSubmit = (e, formData) => {
    e.preventDefault();

    //String template literal that's responsible for making the message that's posted in the tellor-bounties chat on Telegram.
    const text = `${formData.firstName} ${
      formData.lastName
    } wants to claim the ${formData.jobTitle} bounty, under ${
      formData.jobType
    }! Their email is: ${formData.email}, their Discord is: ${
      formData.discord ? formData.discord : "N/A"
    }, and their Telegram is: ${
      formData.telegram ? formData.telegram : "N/A"
    }. Additional comments: ${formData.comments ? formData.comments : "N/A"}`;

    //HTTP POST request to Telegram's Bot API with environment variable credentials
    fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHAT_ID}&text=${text}`,
      { method: "POST" }
    );

    //Setting formValues back to normal and closing the modal
    setFormValues(initialFormValues);
    closeClaimModal();
  };

  return (
    <div className="Claim">
      <div className="Claim__Header">
        <h1>Claim a Bounty!</h1>
        <span onClick={closeClaimModal}>&times;</span>
      </div>
      <div className="CF__Error">
        <h5>{errors.firstName}</h5>
        <h5>{errors.lastName}</h5>
        <h5>{errors.email}</h5>
      </div>
      <form className="Claim__Form">
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              value={jobForm.jobTitle}
              type="text"
              name="jobTitle"
              readOnly
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="jobType">Job Type</label>
            <input
              value={jobForm.jobType}
              type="text"
              name="jobType"
              readOnly
            />
          </div>
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleFormChange}
              value={formValues.firstName}
              type="text"
              name="firstName"
              placeholder="First Name - REQUIRED"
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleFormChange}
              value={formValues.lastName}
              type="text"
              name="lastName"
              placeholder="Last Name - REQUIRED"
            />
          </div>
        </div>
        <div className="CF__Long__Input">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleFormChange}
            type="text"
            name="email"
            value={formValues.email}
            className="Claim__Modal__Input"
            placeholder="Enter Your Email - REQUIRED"
          />
        </div>
        <div className="CF__Double__Container">
          <div className="CF__Input__Container">
            <label htmlFor="discord">Discord</label>
            <input
              onChange={handleFormChange}
              value={formValues.discord}
              type="text"
              name="discord"
              placeholder="Enter Your Discord Tag - OPTIONAL"
            />
          </div>
          <div className="CF__Input__Container">
            <label htmlFor="telegram">Telegram</label>
            <input
              onChange={handleFormChange}
              value={formValues.telegram}
              type="text"
              name="telegram"
              placeholder="Enter Your Telegram Handle - OPTIONAL"
            />
          </div>
        </div>
        <div className="CF__Long__Input">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            onChange={handleFormChange}
            value={formValues.comments}
            type="text"
            name="comments"
            className="Claim__Modal__Input"
            placeholder="Add your comments here - OPTIONAL"
          />
        </div>
        <Button
          onClick={(e) => handleFormSubmit(e, formValues)}
          className="Claim__Button"
          disabled={buttonDisabled}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ClaimModal;
