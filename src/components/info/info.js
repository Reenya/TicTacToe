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
                        <div className="info__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            asperiores at commodi, delectus dolores maiores molestiae officia. Adipisci assumenda
                            explicabo facere fugiat fugit labore necessitatibus omnis quaerat sed tenetur, velit!
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}