import './info.scss';
import React from "react";

export default class Info extends React.Component {
    state = {
        moves: 0,
        playerWin:0,
        playerLose:0
    }
    render() {
        const {moves,playerWin,playerLose} = this.state;
        return (
            <React.Fragment>
                <div className='col-lg-4  col-md-12'>
                    <button className="info__button-restart">Restart <i className="fa fa-refresh"></i></button>

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
                            <div className="info__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at commodi, delectus dolores maiores molestiae officia. Adipisci assumenda explicabo facere fugiat fugit labore necessitatibus omnis quaerat sed tenetur, velit!</div>
                        </div>
                    </div>


                </div>




            </React.Fragment>
        )
    }
}