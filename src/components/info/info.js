import './info.scss';
import React from "react";
import Winner from "../winner/winner";
import {ButtonRestart} from "../buttons";

export default class Info extends React.Component {
    state = {
        moves: 0,

    }

    render() {
        const {restartAction,continueAction,countMoves,playerWin,playerLose,winner} = this.props;

        const winMessage = winner? <Winner winner={winner}
                                           continueAction = {continueAction}/> : null;
        return (
            <div className='col-lg-4  col-md-12'>

                {winMessage}

                <ButtonRestart restartAction = {restartAction}/>

                <div className="info__stats">
                    <div className="info">
                        <div className="info__block">
                            <div className="info__title">Moves</div>
                            <div className="info__content">{this.props.moves}</div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="info__block">
                            <div className="info__title">Score</div>
                            <div className="info__content">{playerWin} : {playerLose}</div>
                        </div>
                    </div>
                </div>


                <div className="info info--rules">
                    <div className="info__block">
                        <div className="info__title">Rules</div>
                        <div className="info__content">
                            <div>1. You have field 15x15</div>
                            <div>2. You need to collect 5 crosses in a row (including vertical and diagonal axes)</div>
                            <div>3. AI will disturb you and seek to collect their 5 crosses</div>
                            <div>4. So go and win!</div>

                        </div>
                    </div>
                </div>


            </div>

        )
    }
}