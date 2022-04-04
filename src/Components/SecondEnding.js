import React from 'react';
import Pic from "./../requireImages/qulty_mngmnt_ending.jfif"

function SecondEnding(props) {
    return (
        <>
            <p className="flexibility">We are fully capable to satisfy your Demands of higher flexibility by customizing any engagement model</p>
            <div className="pruthatek-FTM">
                <div className="img-cont">
                    <img src={Pic} alt="pic" />
                </div>
                <div className="FTM-flex">
                    {props.data.map((it, ind) => (
                        <div>
                            <h1>{it.title}</h1>
                            <p>{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SecondEnding;