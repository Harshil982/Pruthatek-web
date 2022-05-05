import React from 'react';
import './../Styles/Engagement.css'
import CommonCard from './CommonCard';
import data from './../JSON/EngagementModelsData.json'
import SecondEnding from './SecondEnding';
import MainInfo from './MainInfo';

function Engagement(props) {
    document.title = "Engagement Models"
    const mainInfoData = {
        Desc : ["Your business solution should be safe and secure with our expertise in develpoment. at Pruthatek, we deliver secure and quality IT sevices, protecting your critical data with the required technology. we will signing the NDA for all the source code's rights, which will be your after completing the projects."]
    }
    const footData = {
    mainTitle : "We are fully capable to satisfy your Demands of higher flexibility by customizing any engagement model",    
    features : [{
        title : "Fixed Price",
        desc : "PruthaTek offers customers a fixed price/fixed scope model when the scope and specifications of the project are reasonably clear. Under this low-risk model, we define expected deliverables and timelines as to settle a mutually agreed fixed price. This pricing model is applicable for Agile projects as well. The scope is broken down into short user stories. We are paid the price based on the story size determined during the planning session upon completion of this story regardless of its size."
    },
    {
        title : "Time & Material",
        desc : "We opt for the Time &amp; Material Model as to provide you with greater flexibility that allows you to alter project requirements on an ongoing basis mirroring upcoming market trends. This model is perfect for complex projects with inevitable changes in specification and design. This model envisages payments at an hourly rate, which is agreed upon when the agreement is concluded. The team size may be changed at any time, thus, optimizing the cost and duration of the project."
    },
    {
        title : "Milestone Billing",
        desc : "We recommend this option for complex long-lasting projects with clearly identified phases where either time or milestone-based payment schedules are preferred. As each and every milestone is properly accomplished the client is expensed either a portion of the whole project expense or simply a pre-defined sum decided upon ahead of the project. This model provides for better progress monitoring and reduces risks associated with large-scale software endeavors."
    }
    ]}
    return (
        <div className="engagement-models">
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Engagement Models</h1>
                <p className="qulty-desc">We offer a full spectrum of engagement options to suit your business needs, to help you enjoy the benefits of external expertise, cost management and risk mitigation.</p>
            </div>
            <MainInfo data={mainInfoData} />

            {/* Comprehensive Approach to Quality */}
            <h2 className="Comprehensive-title">Our Business Continuty</h2>
            <div className="flex-container margin-cont">
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="bubble-1">
                    <path fill="#24A148" d="M55.6,-48.3C65.4,-32,62.1,-9.3,56.2,11.2C50.2,31.6,41.5,49.8,24.7,62C7.9,74.2,-16.9,80.4,-35.8,72.2C-54.8,63.9,-67.8,41.2,-73.4,16.8C-78.9,-7.6,-76.9,-33.7,-63.5,-50.9C-50,-68,-25,-76.2,-1.1,-75.4C22.9,-74.5,45.7,-64.6,55.6,-48.3Z" transform="translate(100 100)" />
                </svg> */}
                {data.slice(0,3).map((item, index) => (
                    <CommonCard data={item} />
                ))}
            </div>
            <SecondEnding data={footData}/>
        </div>
    );
}

export default Engagement;