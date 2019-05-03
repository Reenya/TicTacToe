import React from "react";
import GameField from "./game-field";

export default class GamePlay extends React.Component {
    state = {
        field: null,
        fieldSize: 12,
        countMoves: 0,
        winner:null,
        winSequence: []

    };

    gameRestart = () => {
        this.setState({
            field: null,
            fieldRender: [],
            fieldSize: 12,
            countMoves: 0,
            winner:null,
            winSequence: []
        })
        this.createGameField();
        this.props.restartEnd();
    }

    componentDidMount() {
        this.createGameField();
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.restart === false && this.props.restart === true) {
            this.gameRestart();
        }
    }


    createGameField = () => {
        const {fieldSize} = this.state;
        const field = [];
        for (let i = 0; i < fieldSize + 2; i++) {
            field[i] = [];
            for (let j = 0; j < fieldSize + 2; j++) {
                field[i].push(new EmptyCell(i, j));
            }
        }
        //create border
        for (let i = 0; i < fieldSize + 2; i++) {
            field[0][i] = new BorderCell();
            field[i][0] = new BorderCell();
            field[fieldSize + 1][i] = new BorderCell();
            field[i][fieldSize + 1] = new BorderCell();
        }
        this.setState({field});
    };


    playerMove = ({rowIndex, cellIndex}) => {
        const {field} = this.state;
        if (!this.isItStep(field[rowIndex + 1][cellIndex + 1])) {
            const newField = [...field];
            newField[rowIndex + 1][cellIndex + 1] = new Step('player', cellIndex + 1, rowIndex + 1);

            this.setState({
                field: newField,

            });


            for (let i = 0; i < 4; i++) {
                this.calculateNextMove();
            }
            ;
            this.props.changeCountMoves();
            this.pcMove();
            this.testWin('player');
        }


    };

    calculateNextMove = () => {
        const {fieldSize, field} = this.state;


        for (let i = 1; i < fieldSize + 1; i++) {
            for (let j = 1; j < fieldSize + 1; j++) {
                const tempCell = field[i][j]
                if (this.isItStep(tempCell)) {
                    this.searchPotencialIntersections(tempCell)
                }
            }
        }
    };

    isItStep = (item) => {
        if (item.type !== ('emptyCell' || 'border')) return true;

        return false;
    };

    isItBorder = (item) => {
        if (item.type === 'border') return true;

        return false;
    };

    isItEmpty = (item) =>{
        if (item.type === 'emptyCell') return true;

        return false;
    }

    searchPotencialIntersections = (cell) => {
        const {field} = this.state;
        const nearCells = this.getArrayNearCells(cell);
        nearCells.forEach((neighbour, namberDirection) => {
            if (this.isItStep(neighbour)) {
                if (this.isHaveSameType(cell, neighbour)||this.isItBorder(neighbour)) {
                    this.recalculationPotencialRelatedCells(cell, neighbour, namberDirection)
                }
            }
        })

    };

    recalculationPotencialRelatedCells = (cell, neighbour, namberDirection) => {
        const oppositeSides = [4, 5, 6, 7, 0, 1, 2, 3];
        const num = cell.stepPotential[namberDirection];
        neighbour.stepPotential[namberDirection] += cell.stepPotential[namberDirection];
        cell.stepPotential[oppositeSides[namberDirection]] += neighbour.stepPotential[oppositeSides[namberDirection]];
        cell.stepPotential[namberDirection] = 0;
        neighbour.stepPotential[oppositeSides[namberDirection]] = 0;

    }

    isHaveSameType = (cell, neighbour) => {
        if (cell.type === neighbour.type && !this.isItEmpty(cell) && !this.isItEmpty(neighbour)) return true
        else return false;
    };

    getArrayNearCells = ({y, x}) => {

        const {field} = this.state;
        return [
            field[y - 1][x], field[y - 1][x + 1],
            field[y][x + 1], field[y + 1][x + 1],
            field[y + 1][x], field[y + 1][x - 1],
            field[y][x - 1], field[y - 1][x - 1]
        ]
    };

    getNearCell({x, y}, direction) {
        const {field} = this.state;
        switch (direction) {
            case 0:
                return field[y - 1][x];
                break;
            case 1:
                return field[y - 1][x + 1];
                break;
            case 2:
                return field[y][x + 1];
                break;
            case 3:
                return field[y + 1][x + 1];
                break;
            case 4:
                return field[y + 1][x];
                break;
            case 5:
                return field[y + 1][x - 1];
                break;
            case 6:
                return field[y][x - 1];
                break;
            case 7:
                return field[y - 1][x - 1];
                break;
        }
    }


    //there is methods for calculation next move for pc
    pcMove = () => {
        const {field} = this.state;
        const coordsForMove = this.calculateCellPotential('player');
        const newField = field.slice();
        field[coordsForMove.y][coordsForMove.x] = new Step('pc', coordsForMove.x, coordsForMove.y);
        this.setState({})
        // const pcPotential = this.calculateCellPotential('pc');
    };

    calculateCellPotential = (type) => {
        const {fieldSize, field} = this.state;

        //create array for cell potential for move
        const resField = [];
        for (let i = 0; i < fieldSize + 2; i++) {
            resField[i] = [];
            for (let j = 0; j < fieldSize + 2; j++) {
                resField[i].push(0);
            }
        }

        // console.log('это тот самый массив',resField);

        for (let i = 1; i < fieldSize + 1; i++) {
            for (let j = 1; j < fieldSize + 1; j++) {
                const cell = field[i][j]; //temp cell

                if (this.isItStep(cell) && cell.type === type) {
                    const nearCells = this.getArrayNearCells(cell);

                    nearCells.forEach((neighbour, direction) => {
                        if (!this.isItStep(neighbour) && !this.isItBorder(neighbour)) {

                            //for cells that may intersect in the future
                            const oppositeSides = [4, 5, 6, 7, 0, 1, 2, 3];
                            const nextNearCells = this.getArrayNearCells(neighbour);
                            const nextCell = nextNearCells[direction];
                            const value1 = cell.stepPotential[direction];
                            let value2 = 0;
                            if (this.isItStep(nextCell) && !this.isItBorder(nextCell)) {
                                value2 = nextCell.stepPotential[oppositeSides[direction]]
                            }
                            resField[neighbour.y][neighbour.x] = Math.max(resField[neighbour.y][neighbour.x], value1 + value2);
                        }

                    })
                }
            }
        }

        // return {x:1, y:2}
        return this.findMax(resField);
    };

    findSumPotintialNearCells(cell) {

    }

    findMax = (arr) => {
        const {fieldSize} = this.state;

        let max = 0;
        let coords = {};
        arr.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
            if (col > max) {
                max = col;
                coords = {y: rowIndex, x: colIndex};
            }
        }));
        return coords;
    };

    testWin(type) {
        const {field, fieldSize} = this.state;
        for (let i = 1; i < fieldSize + 1; i++) {
            for (let j = 1; j < fieldSize + 1; j++) {
                this.findCrossesNeighbour(field[i][j]);
            }
        }


    }

    findCrossesNeighbour(cell) {
        const neighbours = this.getArrayNearCells(cell);
        neighbours.forEach((nearCell, direction) => {

            if (this.isHaveSameType(cell,nearCell)) {
                let res = this.oneLineMatch(nearCell,direction,2,[cell,nearCell]);
                if (res) {
                    this.setState({
                        winner: res[0].type,
                        winSequence: res
                    })
                    console.log(this.state.win);
                    this.props.setWinner(res[0].type);

                }
            }

        })

    };

    oneLineMatch = (cell, direction, count, array) => {

        if (count === 5) {return array}
        else {
            const neighbours = this.getNearCell(cell, direction);
            if (!this.isHaveSameType(cell, neighbours)) {return null};
            return this.oneLineMatch(neighbours, direction, count + 1, [...array,neighbours]);

        }
    }

    //generate array of game field with values for correct render
    fieldRender = () => {
        const {field, fieldSize,winSequence} = this.state;
        if (!field) return [];
        //mark win sequence
        const copyField = field.slice();
        // console.log(copyField);

        winSequence.forEach( (item) => {
            console.log('hah',copyField[item.y][item.x].win);
            copyField[item.y][item.x].win =true;

        });


        const newField = [];
        for (let i = 1; i < fieldSize + 1; i++) {
            newField[i - 1] = [];
            for (let j = 1; j < fieldSize + 1; j++) {
                const item = copyField [i][j];
                const markWin = item.win? 'mark-win' : null;
                if (!this.isItStep(item)) newField[i - 1].push(' ');
                else {
                    if (item.type === 'player') newField[i - 1].push(<i className={`fa fa-times ${markWin}`}></i>)
                    else newField[i - 1].push(<i className={`fa fa-circle-o ${markWin}`}></i>)
                }
            }
        }

        // winSequence.forEach( (item) => {
        //     console.log('hah',newField[item.y-1][item.x-1]);
        //     newField[item.y-1][item.x-1].className.add('markWin');
        //
        // });
        return newField;
        // return field.map((row) => row.map(
        //     (item) => {
        //
        //         if (typeof item === 'number')  return ' '
        //         else {
        //             if (item.type === 'player') return <i className="fa fa-times"></i>
        //             else return <i className="fa fa-circle-o"></i>
        //         }
        // }));

    }

    render() {
        const {countMoves,winner,winSequence} = this.state;
        const {setWinner} = this.props;

        return (
            <GameField field={this.fieldRender()}
                       playerMove={this.playerMove}
                       moves={countMoves}
                       winner = {winner}
                       />
        )
    }


}

//contanes info about step player or pc
class Step {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    stepPotential = [1, 1, 1, 1, 1, 1, 1, 1]; // 8 directions
    type = null;
    x = null;
    y = null;
    win = false;
}

class BorderCell {
    type = 'border';
    stepPotential = [-1, -1, -1, -1, -1, -1, -1, -1];
};

class EmptyCell {
    constructor(y, x) {
        this.y = y;
        this.x = x;
    }

    type = 'emptyCell';
    x = null;
    y = null;

}

