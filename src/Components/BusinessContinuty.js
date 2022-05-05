import React from 'react';
import './../Styles/QualityManagement.css'
import './../Styles/BusinessContinuty.css'
import CommonCard from './CommonCard';
import data from './../JSON/BusinessContinutyData.json'
import Pic from "./../requireImages/qulty_mngmnt_ending.jfif"
import MainInfo from './MainInfo';
// import { BsCheck2Circle } from 'react-icons/bs'

function BusinessContinuty(props) {
    document.title = "Business Continutiy"
    const mainInfoData = {
        Desc: ["PruthaTek maintains a comprehensive, thoughtful process that ensures business continuity and ultimate reliability.", "Product lifecycle monitoring to ensure compliance with established processes and guidelines.", "Product quality verification and validation to ensure that it complies with crents ousness teads and expectations.", "Establishment of an effective collaboration between all project team members."]
    }
    return (
        <div className="business-cont">
            {/* Quality Management Top Components */}
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Business Continuty</h1>
                <p className="qulty-desc">PruthaTek maintains a comprehensive, thoughtful process that ensures business continuity and ultimate reliability.</p>
            </div>
            <MainInfo data={mainInfoData} />

            {/* Comprehensive Approach to Quality */}
            <h2 className="Comprehensive-title">Our Business Continutiy</h2>
            <div className="business-cont-flex-container">
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="bubble-1">
                    <path fill="#24A148" d="M55.6,-48.3C65.4,-32,62.1,-9.3,56.2,11.2C50.2,31.6,41.5,49.8,24.7,62C7.9,74.2,-16.9,80.4,-35.8,72.2C-54.8,63.9,-67.8,41.2,-73.4,16.8C-78.9,-7.6,-76.9,-33.7,-63.5,-50.9C-50,-68,-25,-76.2,-1.1,-75.4C22.9,-74.5,45.7,-64.6,55.6,-48.3Z" transform="translate(100 100)" />
                </svg> */}
                {data.map((item, index) => (
                    <CommonCard data={item} />
                ))}
            </div>
            {/* Ending */}
            <div className="qulaity-mng-ending">
                <h2 className="title">Disaster Recovery</h2>
                <div className="qulaity-mng-ending-flex">
                    <div className="business-continuty-ending-desc">
                        <p>PruthaTek implements a disaster recovery program at all of its data premises which includes a set of data protection and other security-related activities and embraces data recovery scenarios for each potential data loss situation (e.g., hardware or software failure, computer virus, human factor, etc.). This program comprises multiple components to minimize the risk of any single point of failure, including the following:</p>
                        <p>All application data is replicated to multiple systems within a data center and to remote data centers.</p>
                        <p>PruthaTek operates a geographically distributed set of data centers that are designed to maintain service continuity in the event of a disaster or other incident in a single region</p>
                    </div>
                    <div className="image-cont">
                        <img src={Pic} alt="pic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessContinuty;