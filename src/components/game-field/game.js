import React from "react";
import GameField from "./game-field";

export default class GamePlay extends React.Component {
    state = {
        field: null,
        fieldRender: [],
        fieldSize: 12

    };

    componentDidMount() {
        this.createGameField();
    }


    createGameField = () => {
        const {fieldSize} = this.state;
        const field = [];
        for (let i = 0; i < fieldSize + 2; i++) {
            field[i] = [];
            for (let j = 0; j < fieldSize + 2; j++) {
                field[i].push(new EmptyCell(i,j));
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
        this.fieldRender();
        return field;
    };


    playerMove = ({rowIndex, cellIndex}) => {
        const newField = [...this.state.field];
        newField[rowIndex + 1][cellIndex + 1] = new Step('player', cellIndex + 1, rowIndex + 1);

        this.setState({
            field: newField
        });
        for (let i = 0;i<4;i++){
            this.calculateNextMove();
        }

        this.pcMove();


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
        if (item.type !== ('emptyCell') ) return true;

        return false;
    };

    isItBorder = (item) =>{
        if (item.type === 'border' ) return true;

        return false;
    }

    searchPotencialIntersections = (cell) => {
        const {field} = this.state;
        const nearCells = this.getArrayNearCells(cell);
        nearCells.forEach((neighbour, namberDirection) => {
            if (this.isItStep(neighbour)) {
                if (this.isHaveSameType(cell, neighbour)) {
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
        if (cell.type === neighbour.type || neighbour.type === 'border') return true
        else return false;
    };

    getArrayNearCells = (cell) => {

        const {field} = this.state;
        return [
            field[cell.y - 1][cell.x], field[cell.y - 1][cell.x + 1],
            field[cell.y][cell.x + 1], field[cell.y + 1][cell.x + 1],
            field[cell.y + 1][cell.x], field[cell.y + 1][cell.x - 1],
            field[cell.y][cell.x - 1], field[cell.y - 1][cell.x - 1]
        ]
    }


    //there is methods for calculation next move for pc
    pcMove = () => {
        const {field} = this.state;
        const coordsForMove = this.calculateCellPotential('player');
        const newField = field.slice();
        field[coordsForMove.y][coordsForMove.x] = new Step('pc',coordsForMove.x,coordsForMove.y);
        console.log(newField);
        this.setState({

        })
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

                    nearCells.forEach( (neighbour,direction ) => {
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
                            resField[neighbour.y][neighbour.x] = Math.max(resField[neighbour.y][neighbour.x],value1+value2);
                        }

                    })
                }
            }
        }

        // return {x:1, y:2}
         return this.findMax(resField);
    };

    findSumPotintialNearCells(cell){

    }

    findMax = (arr) => {
        const {fieldSize} = this.state;

        let max = 0;
        let coords = {};
        arr.forEach( (row,rowIndex) => row.forEach( (col,colIndex) => {
            if (col > max) {
                max = col;
                coords = {y: rowIndex, x: colIndex};
            }
        }));

        console.log(max,coords);
        return coords;
    }

    //generate array of game field with values for correct render
    fieldRender = () => {
        const {field, fieldRender, fieldSize} = this.state;

        if (!field) return [];
        const newField = [];
        for (let i = 1; i < fieldSize + 1; i++) {
            newField[i - 1] = [];
            for (let j = 1; j < fieldSize + 1; j++) {
                const item = field [i][j];
                if (!this.isItStep(item)) newField[i - 1].push(' ');
                else {
                    if (item.type === 'player') newField[i - 1].push(<i className="fa fa-times"></i>)
                    else newField[i - 1].push(<i className="fa fa-circle-o"></i>)
                }
            }
        }
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
        return (
            <GameField field={this.fieldRender()} playerMove={this.playerMove}/>
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
}

class BorderCell {
    type = 'border';
    stepPotential = [-1, -1, -1, -1, -1, -1, -1, -1];
};

class EmptyCell {
    constructor(y,x){
        this.y = y;
        this.x = x;
    }
    type =  'emptyCell';
    x =  null;
    y =  null;

}

