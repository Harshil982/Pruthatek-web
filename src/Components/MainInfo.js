import React from 'react';
import companyPeople from './../requireImages/company_people.jfif'

function MainInfo(props) {
    return (
        <div className="flex-container margin">
            <div className="company_people-img-cont" >
                <div className="shadow"></div>
                <div className="company_people-img">
                    <img src={companyPeople} alt="company_people" />
                </div>
            </div>
            <div className="QMA-tasks">
                {props.data.title && <h2>{props.data.title}</h2>}
                {props.data.Desc.map((item,index) => (
                    <p className="details" key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default MainInfo;