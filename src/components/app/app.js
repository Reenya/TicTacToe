import React from "react";
import './app.scss';
import '../game-field/game'
import Game from "../game-field/game";
import Info from "../info/info";

export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1 className='title'>TicTacToy</h1>

                <div className="row">
                    <Game/>

                    <Info/>
                </div>

            </div>
        )
    }
}