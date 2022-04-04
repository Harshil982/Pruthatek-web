import React from 'react';
import Pic from "./../requireImages/qulty_mngmnt_ending.jfif"
import { BsFillCaretRightFill } from 'react-icons/bs'

function EndingInfo(props) {
    return (
        <div className="qulaity-mng-ending">
            <h2 className="title">{props.data.title}</h2>
            <p className="qulty-desc">{props.data.titleDesc}</p>
            <div className="qulaity-mng-ending-flex">
                <div className="image-cont">
                    <img src={Pic} alt="pic" />
                </div>
                <div className="qulaity-mng-ending-desc">
                    {props.data.features.map((item, index) => (
                        <div className="individual-desc" key={index}>
                            <p><BsFillCaretRightFill />{item.featureTitle}</p>
                            <p>{item.featureDesc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EndingInfo;