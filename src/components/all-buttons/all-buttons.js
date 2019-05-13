import React from "react";
import Button from "../button";

const ButtonContinue = ({continueAction}) => {
    return(
        <Button action={continueAction}> Continue </Button>
    )
};

const ButtonRestart = ({restartAction}) => {
    return(
        <Button action={restartAction}> Restart <i className="fa fa-refresh"></i> </Button>
    )
};

export {ButtonContinue,ButtonRestart};