import React from "react";
import './app.scss';
import '../game/game'
import Game from "../game/game";
import Info from "../info/info";
import Button from "../button/button";
import {ButtonContinue} from "../buttons/buttons";

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


    restart = () => {
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
        this.setState({
            winner: win
        })
    }


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
                           restart={this.restart }/>
        return (
            <div className="container">
                <ButtonContinue/>
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