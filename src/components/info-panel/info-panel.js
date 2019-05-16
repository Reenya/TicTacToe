import React from "react";
import {ButtonRestart} from "../all-buttons";
import InfoBlock from "../info-block";
import WinnerBlock from "../winner-block";

import './info.scss';

const InfoPanel =({restartAction,continueAction,playerWin,playerLose,winner,moves}) => {

        const winMessage = winner? <WinnerBlock winner={winner}
                                           continueAction = {continueAction}/> : null;
        return (
            <div className='col-xl-4 col-lg-3  col-md-12'>

                {winMessage}

                <ButtonRestart restartAction = {restartAction}/>

                <InfoBlock title="Moves">
                    {moves}
                </InfoBlock>

                <InfoBlock title="Score">
                    {playerWin} : {playerLose}
                </InfoBlock>

                <InfoBlock title="Rules"
                           extraClass="info-block--rules">
                    <div>1. You have field 15x15</div>
                    <div>2. You need to collect 5 crosses in a row (including vertical and diagonal axes)</div>
                    <div>3. AI will disturb you and seek to collect their 5 crosses</div>
                    <div>4. So go and win!</div>
                </InfoBlock>

            </div>

        )
}

export default InfoPanel;