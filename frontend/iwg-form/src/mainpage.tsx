import React from 'react';
//import { useState } from 'react';
import './mainpage.css';
import './formcomponents.css';
import imageSrc from './assets/tmc-logo.jpeg';
import CheckWithText from './components/checkwithtext';
import Spacer from './components/spacer';
import TextfieldWithLabel from './components/textfieldlabeled';
import SelectLabels from './components/selectmenu';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


//type ValuePiece = Date | null;

//type Value = ValuePiece | [ValuePiece, ValuePiece];

const MainPage: React.FC = () => {
    //const [value, onChange] = useState<Value>(new Date());
    return (
        <main id="mainpage">
            <div className="form-container">
                {/* header-logo row div */}
                <div className="parent">
                    {/* header div */}
                    <div className="child">
                        <h1 className="form-heading">Report an Incident</h1>
                    </div>
                    {/* image div */}
                    <div className="child">
                        <img
                            style={{
                                maxWidth: '60px',
                                maxHeight: '61px',
                                height: 'auto',
                                width: 'auto',
                                flexShrink: 0
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

                <div className='parent'>
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

                <div className='bottom-margin'>
                    <CheckWithText text="Keep my report anonymous" />
                    <CheckWithText text="I consent to give media my contact info" />
                </div>

                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Umich Email' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='Affiliation' options={AffiliationList} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='First Name' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Last Name' />
                    </div>
                </div>

                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Phone' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Zip' />
                    </div>
                </div>

                <div className="bottom-margin">
                    <div>
                        <span className="label-style">Address</span>
                        <span className="asterisk">*</span>
                    </div>

                    <TextField className="TextField" />
                </div>

                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='City' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='State' options={usStates} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="child">
                        <SelectLabels labelText='Religion' options={religions} />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Race/Ethnicity' />
                    </div>
                </div>

                <div className="subheader">Tell us about the incident:</div>

                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Incident Location' />
                    </div>
                    <div className="child">
                        <div>
                            <span className="label-style">Date/Time</span>
                            <span className="asterisk">*</span>
                        </div>
                        <Spacer height={3} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimeField defaultValue={dayjs('2022-04-17T15:30')} />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="bottom-margin">
                    <div>
                        <span className="label-style">Description of Incident</span>
                        <span className="asterisk">*</span>
                    </div>
                        <Spacer height={3} />
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        className="TextField"
                    />
                </div>
                <div className="bottom-margin">
                    <div>
                        <span className="label-style">Attach Evidence</span>
                    </div>
                    <Spacer height={3} />
                    <button className="image-button-style">
                        <img src="/material-symbols_image-outline.svg" alt="Icon" className="icon-style" />
                        <span className="text-style">Choose image</span>
                    </button>
                </div>
                <div className="button-container">
                    <button className="button-style">
                        <span className="submit-text">Submit</span>
                        <img className="send-symbol" src="/iconamoon_send-light.svg" alt="Send" />
                    </button>
                </div>

            </div>
        </main>
    );
};

export default MainPage;

const AffiliationList = ['UM Student', 'Faculty', 'Staff', 'Alumni', 'Visitor'];
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
    "Wyoming"
];
const religions = ['Islam', 'Christianity', 'Judaism', 'Other'];

