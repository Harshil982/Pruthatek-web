import React from 'react';
import './../Styles/QualityManagement.css'
import CommonCard from './CommonCard';
import data from './../JSON/QualityManagementData.json'
import MainInfo from './MainInfo';
import EndingInfo from './EndingInfo';

function QualityManagement(props) {
    document.title = "Quality Management"
    const mainInfoData = {
        title: "QMS TASKS & OBJECTIVES",
        Desc: ["Elaboration and Implementation of procedures and regulations for software development process based on industrial standards  and besst practices.", "Product lifecycle monitoring to ensure compliance with established processes and guidlines.", "Product Quality verification and validation to ensure that it complies with clients business need and expectations.", "Establishment of an effective collaboration between all project team members."]
    }

    const FootInfo = {
        title: "Qa That is Weaved into The Devel Opment Lifecycle",
        titleDesc: "Pruthatek performs quality assurance throughout the entire software development lifecycle with QA team members being involved a all stages. A Lead OA specialist is assigned at the commencement of each project and is involved into initial business analysis and fecuirements specification. Such a simultaneous interaction of our development and QA teams provides for a better understanding of the project scope and the client's business objectives. A typical CA reevele al PruthaTek includes the following phases:",
        features: [{
            featureTitle: "Initiation and Planning",
            featureDesc: "Project specifiaction analysis,test plan elaboration and team assignment"
        },
        {
            featureTitle: "Iteration Audits",
            featureDesc: "Ongoing testing of intermediate iteration builds"
        },
        {
            featureTitle: "First Review",
            featureDesc: "Initial testing of first development deliverables.refining the test plan and test items (if necessary)."
        },
        {
            featureTitle: "Final verification and Validation",
            featureDesc: "Final Product testing to ensure bespoke quality and readlines for deployement."
        },
        ]
    }
    return (
        <>
            {/* Quality Management Top Components */}
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Quality Management</h1>
                <p className="qulty-desc">PruthaTek has put in place a Quality Management System(QMS) comprising a complex set of engineering and managerial activities that ensure bespoke quality of delivered  software throughout the entire workflow.</p>
            </div>

            <MainInfo data={mainInfoData} />

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
            <EndingInfo data={FootInfo} />
        </>
    );
}

export default QualityManagement;