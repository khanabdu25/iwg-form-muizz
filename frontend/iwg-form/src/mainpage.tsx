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
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


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
                <Spacer height={20} />
                <div className="subheader">Send my report to:</div>
                <Spacer height={10} />
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
                <Spacer height={30} />
                <div className="subheader">Enter your Information:</div>
                <Spacer height={10} />
                <CheckWithText text="Keep my report anonymous" />
                <CheckWithText text="I consent to give media my contact info" />
                <Spacer height={30} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Umich Email' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='Affiliation' options={AffiliationList} />
                    </div>
                </div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='First Name' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Last Name' />
                    </div>
                </div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Phone' />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Zip' />
                    </div>
                </div>
                <Spacer height={10} />
                <div>
                    <span className="label-style">Address</span>
                    <span className="asterisk">*</span>
                </div>
                <Spacer height={5} />
                <TextField />
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='City' />
                    </div>
                    <div className="child">
                        <SelectLabels labelText='State' options={usStates} />
                    </div>
                </div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <SelectLabels labelText='Religion' options={religions} />
                    </div>
                    <div className="child">
                        <TextfieldWithLabel labelText='Race/Ethnicity' />
                    </div>
                </div>
                <Spacer height={30} />
                <div className="subheader">Tell us about the incident:</div>
                <Spacer height={10} />
                <div className='parent'>
                    <div className="child">
                        <TextfieldWithLabel labelText='Incident Location' />
                    </div>
                    <div className="child">
                        <div>
                            <span className="label-style">Date/Time</span>
                            <span className="asterisk">*</span>
                        </div>
                        <Spacer height={5} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimeField defaultValue={dayjs('2022-04-17T15:30')} />
                        </LocalizationProvider>
                    </div>
                </div>
                <Spacer height={85} />
                <TextField
                    id="outlined-multiline-static"
                    label="Detailed Description *"
                    multiline
                    rows={4}
                    defaultValue="Incident Description"
                />
                <Spacer height = {85}/>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
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

