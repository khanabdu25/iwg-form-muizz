import React from "react";
//import { useState } from 'react';
import "./mainpage.css";
import "./formcomponents.css";
import imageSrc from "./assets/tmc-logo.jpeg";
import CheckWithText from "./components/checkwithtext";

import { TextField } from "@mui/material";

import FormElement from "./components/FormElement/FormElement";

const MainPage: React.FC = () => {
    //const [value, onChange] = useState<Value>(new Date());
    return (
        <main id="mainpage">
            <div className="form-container">
                {/* form title with logo */}
                <div className="row max-space">
                    <div className="child">
                        <h1 className="form-heading">Report an Incident</h1>
                    </div>
                    <div className = "child">
                        <img
                            style={{
                                maxWidth: "60px",
                                maxHeight: "61px",
                                height: "auto",
                                width: "auto",
                                flexShrink: 0,
                            }}
                            src={imageSrc}
                            alt="Description"
                        />
                    </div>
                </div>
                <div>
                    <span className="asterisk">*</span>
                    <span className="information"> </span>
                    <span className="required">Required</span>
                </div>
                <div className="subheader">Send my report to:</div>
                <div className='row max-space'>
                    <div className="child">
                        <CheckWithText text="CAIR" />
                    </div>
                    <div className="child">
                        <CheckWithText text="DPSS" />
                    </div>
                    <div className="child">
                        <CheckWithText text="ECRT" />
                    </div>
                </div>
                <div className="subheader">Enter your Information:</div>
                <div className="bottom-margin">
                    <CheckWithText text="Keep my report anonymous" />
                    <CheckWithText text="I consent to give media my contact info" />
                </div>
                <div className="row">
                    <FormElement labelText="Umich Email" formType="text" />
                    <FormElement
                        labelText="Affiliation"
                        formType="select"
                        data={AffiliationList}
                    />
                </div>
                <div className="row">
                    <FormElement labelText="First Name" formType="text" />
                    <FormElement labelText="Last Name" formType="text" />
                </div>
                <div className="row">
                    <FormElement labelText="Phone" formType="text" />
                    <FormElement labelText="Zip" formType="text" />
                </div>
                <div className="row">
                    <FormElement labelText="Street" formType="text" />
                    <FormElement labelText="City" formType="text" />
                    <FormElement
                        labelText="State"
                        formType="select"
                        data={usStates}
                    />
                </div>
                <div className="row">
                    <FormElement
                        labelText="Religion"
                        formType="select"
                        data={religions}
                    />
                    <FormElement labelText="Race/Ethnicity" formType="text" />
                </div>
                <div className="subheader">Tell us about the incident:</div>
                <div className="row">
                    <FormElement
                        labelText="Incident Location"
                        formType="text"
                    />
                    <FormElement
                        labelText="Incident Date/Time"
                        formType="time"
                    />
                </div>
                <div className="bottom-margin">
                    <div>
                        <span className="label-style">
                            Description of Incident
                        </span>
                        <span className="asterisk">*</span>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        className="fullwidth"
                    />
                </div>
                <div className="bottom-margin">
                    <div>
                        <span className="label-style">Attach Evidence</span>
                    </div>
                    <button className="image-button-style">
                        <img
                            src="/material-symbols_image-outline.svg"
                            alt="Icon"
                            className="icon-style"
                        />
                        <span className="text-style">Choose image</span>
                    </button>
                </div>
                <div className="button-container">
                    <button className="button-style">
                        <span className="submit-text">Submit</span>
                        <img
                            className="send-symbol"
                            src="/iconamoon_send-light.svg"
                            alt="Send"
                        />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MainPage;

const AffiliationList = ["UM Student", "Faculty", "Staff", "Alumni", "Visitor"];
const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];
const religions = ["Islam", "Christianity", "Judaism", "Other"];
