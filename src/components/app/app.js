import React from "react";
import './app.scss';
import '../game/game'
import Game from "../game/game";
import Info from "../info/info";

export default class App extends React.Component {
    state = {
        countMoves: 0,
        playerWin: 0,
        playerLose: 0,
        winner: null,
        restart:true
    };

    changeCountMoves = () => {
        this.setState((state) => ({
            countMoves: state.countMoves + 1
        }))
    };


    restart = () => {
        this.setState({
            countMoves: 0,
            playerWin: 0,
            playerLose: 0
        });

        this.setState( (state) => ({
            restart: !state.restart
        }))
    };

    setWinner = (win) => {
        this.setState({
            winner: win
        })
    }


    render() {
        const {countMoves, playerWin, playerLose, winner,restart} = this.state;

        const game = restart? <Game changeCountMoves={this.changeCountMoves}
                                    setWinner = {this.setWinner}/> : null
        return (
            <div className="container">
                <div className="row ">
                    <h1 className='title col-lg-1'>TicTacToy</h1>
                </div>

                <div className="row justify-content-center">
                    {game}

                    <Info moves={countMoves}
                          playerWin={playerWin}
                          playerLose={playerLose}
                          winner={winner}
                          restart={this.restart}/>
                </div>

            </div>
        )
    }
}