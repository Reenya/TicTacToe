import React from "react";
import './game-render.scss';

export default class GameRender extends React.Component {


    generateKey = () => Math.floor(Math.random() * 1000000);

    render() {
        const {field} = this.props;

        if (field === []) return null;

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

const Cell = ({cellData, playerMove, coords}) => {
    return <td className="game-field__cell"
               onClick={() => playerMove(coords)}>
        {cellData}
    </td>
}