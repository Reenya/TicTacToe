import React from "react";
import './button.scss';

const Button = ({textButton}) => {

    return (
        <button className="button">
            {textButton}
        </button>

    )
};

export default Button;