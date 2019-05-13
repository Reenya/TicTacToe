import React from "react";
import {ButtonContinue} from "../all-buttons";
import InfoBlock from "../info-block";

const WinnerBlock = ({winner, continueAction}) => {
    const message = winner === 'player' ? 'You are a winner!' : 'You lose. Sorry :(';
    return (
        <InfoBlock title={message}>
            <ButtonContinue continueAction={continueAction}/>
        </InfoBlock>
    )
}

export default WinnerBlock;