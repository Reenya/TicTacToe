import React from "react";

import "./info-block.scss";

const InfoBlock = ({title = "",extraClass = "",children=""}) => {
    const allClasses = `info-block ${extraClass}`;

    return(
        <div className={allClasses}>
            <div className="info-block__block">
                <div className="info-block__title">{title}</div>
                <div className="info-block__content">{children}</div>
            </div>
        </div>
    )
};

export default InfoBlock;