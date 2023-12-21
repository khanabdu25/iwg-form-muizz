import React from 'react';
import './mainpage.css';
import './formcomponents.css';
import imageSrc from './assets/tmc-logo.jpeg';

const MainPage: React.FC = () => {
    return (
        <main id="mainpage">
            <div className="form-container">
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
            </div>
        </main>
    );
};

export default MainPage;