import React from 'react';
import './../Styles/Engagement.css'
import companyPeople from './../requireImages/company_people.jfif'
import CommonCard from './CommonCard';
import data from './../JSON/QualityManagementData.json'
import SecondEnding from './SecondEnding';

function Engagement(props) {
    const footData = [{
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
    ]
    return (
        <>
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Quality Management</h1>
                <p className="qulty-desc">PruthaTek has put in place a Quality Management System(QMS) comprising a complex set of engineering and managerial activities that ensure bespoke quality of delivered  software throughout the entire workflow.</p>
            </div>
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src={companyPeople} alt="company_people" />
                    </div>
                </div>
                <div className="QMA-tasks">
                    <h2>QMS TASKS &amp; OBJECTIVES</h2>
                    <p>Elaboration and Implementation of procedures and regulations for software development process based on industrial standards  and besst practices.</p>
                    <p>Product lifecycle monitoring to ensure compliance with established processes and guidlines.</p>
                    <p>Product Quality verification and validation to ensure that it complies with clients business need and expectations.</p>
                    <p>Establishment of an effective collaboration between all project team members.</p>
                </div>
            </div>
            {/* Comprehensive Approach to Quality */}
            <h2 className="Comprehensive-title">Comprehensive Approach To Quality</h2>
            <div className="flex-container margin-cont">
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="bubble-1">
                    <path fill="#24A148" d="M55.6,-48.3C65.4,-32,62.1,-9.3,56.2,11.2C50.2,31.6,41.5,49.8,24.7,62C7.9,74.2,-16.9,80.4,-35.8,72.2C-54.8,63.9,-67.8,41.2,-73.4,16.8C-78.9,-7.6,-76.9,-33.7,-63.5,-50.9C-50,-68,-25,-76.2,-1.1,-75.4C22.9,-74.5,45.7,-64.6,55.6,-48.3Z" transform="translate(100 100)" />
                </svg> */}
                {data.map((item, index) => (
                    <CommonCard data={item} />
                ))}
            </div>
            <SecondEnding data={footData}/>
        </>
    );
}

export default Engagement;