import React from "react";
import Info from "../info";
import Game from "../game";

import './app.scss';

export default class App extends React.Component {
    state = {
        countMoves: 0,
        playerWin: 0,
        playerLose: 0,
        winner: null,
        restart: false
    };

    changeCountMoves = () => {
        this.setState((state) => ({
            countMoves: state.countMoves + 1
        }))
    };

    continueAction =() => {
        this.setState({
            countMoves: 0,
            restart:true,
            winner: null
        });
    }
    restartAction = () => {
        this.setState({
            countMoves: 0,
            playerWin: 0,
            playerLose: 0,
            restart:true
        });

    };

    restartEnd = () => {
        this.setState({restart:false})
    }

    setWinner = (win) => {
        if (win==='player') {
            this.setState((state) => ({
                winner: win,
                playerWin: state.playerWin+1
            }))
        } else {
            this.setState((state) => ({
                winner: win,
                playerLose: state.playerLose+1
            }))
        }
    };

    render() {
        const {countMoves, playerWin, playerLose, winner,restart} = this.state;

        const game = <Game changeCountMoves={this.changeCountMoves}
                           setWinner = {this.setWinner}
                           restart = {restart}
                           restartEnd = {this.restartEnd}/>;


        const info = <Info moves={countMoves}
                           playerWin={playerWin}
                           playerLose={playerLose}
                           winner={winner}
                           restartAction ={this.restartAction}
                           continueAction ={this.continueAction}/>
        return (
            <div className="container">
                <div className="row ">
                    <h1 className='title col-lg-1'>TicTacToy</h1>
                </div>

                <div className="row justify-content-center">
                    {game}
                    {info}
                </div>

            </div>
        )
    }
}