import React from 'react';
import './../Styles/commonCard.css'
import TempImg from './../requireImages/CardImg.png'

function CommonCard(props) {
    return (
        <div className="common-card">
            <img src={TempImg} alt="Quality-management" className="card-img" />
            <div className="common-card-desc">
                <p className="desc-title">{props.data.title}</p>
                <p>{props.data.desc}</p>
            </div>
        </div>
    );
}

export default CommonCard;