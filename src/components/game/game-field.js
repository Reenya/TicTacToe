import './game-field.scss';
import React from "react";
import GamePlay from "./game";
import Winner from "../winner/winner";

export default class GameField extends React.Component {


    generateKey = () => Math.floor(Math.random() * 1000000);

    render() {
        const {field, winner} = this.props;

        if (field === null) return null;
        const winNotification = winner ? <h1>You win!{winner}</h1> : null;

        const gameField = field.map((row, rowIndex) => {
            return <tr className="game-field_row"
                       key={this.generateKey()}>
                {row.map((cell, cellIndex) => {
                        return <Cell
                            cellData={cell}
                            playerMove={this.props.playerMove}
                            coords={{rowIndex, cellIndex}}
                            key={this.generateKey()}
                        />
                    }

                )}</tr>
        });

        return (

                <div className=" col-lg-7  col-md-12">
                    <table className="game-field">
                        <tbody>
                        {gameField}
                        </tbody>
                    </table>


                </div>

        )

    }
}

const Cell = ({cellData, playerMove, coords,winSequence}) => {
    // const isInSequence = ({rowIndex, cellIndex}) => {
    //     winSequence.forEach( (winCell) => {
    //         if ()
    //     })
    // }
    return <td className="game-field__cell"
               onClick={() => playerMove(coords)}>
        {cellData}
    </td>
}