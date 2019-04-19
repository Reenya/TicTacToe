import './game-field.scss';
import React from "react";
import GamePlay from "./game";

export default class GameField extends React.Component {

    componentDidMount() {

    }

    componentDidUpdate(lastState) {
    }

    generateKey = () => Math.floor(Math.random()*1000000);

    render() {
        const {field} = this.props;
        if (field === null) return null;

        const gameField = field.map((row, rowIndex) => {
            return <tr className="game-field_row"
            key={this.generateKey()}>{row.map((cell, cellIndex) =>
                <Cell
                    cellData={cell}
                    playerMove={this.props.playerMove}
                    coords={{rowIndex, cellIndex}}
                    key={this.generateKey()}/>)}</tr>
        })

        return (
            <table  className="game-field col-lg-9  col-md-12">
                <tbody>
                {gameField}
                </tbody>

            </table>
        )

    }
}

const Cell = ({cellData, playerMove, coords}) => {
    return <td className="game-field__cell"
               onClick={() => playerMove(coords)}>
        {cellData}
    </td>
}