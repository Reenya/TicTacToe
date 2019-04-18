import React from "react";
import './app.scss';
import '../game-field/game'
import Game from "../game-field/game";

export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1 className='title'>TicTacToy</h1>

                <table  className="game-field table">
                    <tbody>
                    <Game/>
                    </tbody>

                </table>

            </div>
        )
    }
}