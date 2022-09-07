import './dealmain-module.scss';
import { useState } from 'react';
const DealMain = (props) => {
    console.log(props.dealShock);
    return (
        <h2 className="deal__title">
            <a href="#">
                {props.isDealMain ? (
                    <>
                        <span className="deal__shock">{props.dealShock}</span>
                        <> </>
                        <span className="deal__discount">{props.discount}</span>
                    </>
                ) : (
                    <img src={props.linkImg} alt="" style={{ paddingBottom: 10 }} />
                )}
            </a>
        </h2>
    );
};

export default DealMain;
