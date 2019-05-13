import React from "react";
import GameLogic from "./game-logic";
import GameRender from "./game-render";
import {isItStep} from "./checkTypes";

export default class Game extends React.Component {
    state = {
        field: null,
        fieldSize: 12,
        winner: null,
        winSequence: [],
        gameEnd: false
    };

    gameLogic = new GameLogic(this.state.fieldSize);

    componentDidMount = () => {
        this.setState({
            field: this.gameLogic.createGameField()
        })
    };

    componentDidUpdate = (prevProps) => {

        if (prevProps.restart === false && this.props.restart === true) {
            this.gameRestart();
        }
    }

    gameRestart = () => {

        this.gameLogic = new GameLogic(this.state.fieldSize);

        this.setState({
            field: this.gameLogic.createGameField(),
            fieldSize: 12,
            winner: null,
            winSequence: [],
            gameEnd: false
        });

        this.props.restartEnd();

    };

    playerMove = ({rowIndex, cellIndex}) => {

        if (!this.state.gameEnd) {
            const res = this.gameLogic.playerMove(rowIndex, cellIndex);
            if (res) {
                this.setState({
                    field: res.field
                })

                if (res.winner) {
                    this.setState({
                        winner: res.winner,
                        winSequence: res.winSequence,
                        gameEnd: true
                    })
                    this.props.setWinner(res.winner);
                }
                this.props.changeCountMoves();
            }

        }


    }

    fieldRender = () => {
        const {fieldSize, winSequence, field} = this.state;

        if (!field) return [];

        const copyField = field.slice();
        //mark win sequence
        winSequence.forEach((item) => {
            copyField[item.y][item.x].win = true;
        });

        const newField = [];
        for (let i = 1; i < fieldSize + 1; i++) {
            newField[i - 1] = [];
            for (let j = 1; j < fieldSize + 1; j++) {
                const item = copyField [i][j];
                const markWin = item.win ? 'mark-win' : null;
                if (!isItStep(item)) newField[i - 1].push(' ');
                else {
                    if (item.type === 'player') newField[i - 1].push(<i className={`fa fa-times ${markWin}`}></i>)
                    else newField[i - 1].push(<i className={`fa fa-circle-o ${markWin}`}></i>)
                }
            }
        }

        return newField;
    };

    render() {
        return (
            <GameRender field={this.fieldRender()}
                        playerMove={this.playerMove}/>
        )

    }


}

