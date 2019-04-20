import React from "react";
import './app.scss';
import '../game-field/game'
import Game from "../game-field/game";
import Info from "../info/info";

export default class App extends React.Component{
    state = {
        countMoves:0
    };

    changeCountMoves =()=>{
        this.setState((state)=>({
            countMoves: state.countMoves+1
        }))
    }


    render(){
        const {countMoves} = this.state;
        return (
            <div className="container">
                <div className="row ">
                <h1 className='title col-lg-1'>TicTacToy</h1>
                </div>

                <div className="row justify-content-center">
                    <Game changeCountMoves={this.changeCountMoves}/>

                    <Info moves ={countMoves}/>
                </div>

            </div>
        )
    }
}