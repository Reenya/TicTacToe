import React from "react";
import GameField from "./game-field";

export default class GamePlay extends React.Component {
    state = {
        field: null,
        fieldSize: 12,
        countMoves: 0,
        winner: null,
        winSequence: []

    };

    gameRestart = () => {
        this.setState({
            field: null,
            fieldRender: [],
            fieldSize: 12,
            countMoves: 0,
            winner: null,
            winSequence: []
        })
        this.createGameField();
        this.props.restartEnd();
    }

    componentDidMount() {
        this.createGameField();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.winner && this.state.winner) {
            this.props.setWinner(this.state.winner);
        }

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
                    this.searchPotentialIntersections(tempCell)
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

    isItEmpty = (item) => {
        if (item.type === 'emptyCell') return true;

        return false;
    };

    isHaveSameType = (cell, neighbour) => {
        if (cell.type === neighbour.type && !this.isItEmpty(cell) && !this.isItEmpty(neighbour)) return true
        else return false;
    };

    isHaveOppositeType = (cell, neighbour) => {
        if (cell.type !== neighbour.type && !this.isItEmpty(cell) && !this.isItEmpty(neighbour) && !this.isItBorder(neighbour) && !this.isItBorder(cell)) return true
        else return false;
    };

    //various variants are computed with a sequence connection
    searchPotentialIntersections = (cell) => {
        const {field} = this.state;
        const nearCells = this.getArrayNearCells(cell);
        nearCells.forEach((neighbour, namberDirection) => {
            if (this.isItStep(neighbour)) {
                if (this.isHaveSameType(cell, neighbour) || this.isItBorder(neighbour)) {
                    this.recalculationPotentialIdenticalCells(cell, neighbour, namberDirection)
                }

                if (this.isHaveOppositeType(cell, neighbour) && cell.stepPotential[namberDirection] <= -10) {
                    this.recalculationPotentialOppositeTypeCells(cell, neighbour, namberDirection)
                }

            }
        })

    };
    recalculationPotentialOppositeTypeCells = (cell, neighbour, namberDirection) => {
        const oppositeSides = [4, 5, 6, 7, 0, 1, 2, 3];
        cell.stepPotential[namberDirection] = -100;
        cell.stepPotential[oppositeSides[namberDirection]] = -1;


    }

    recalculationPotentialIdenticalCells = (cell, neighbour, namberDirection) => {
        const oppositeSides = [4, 5, 6, 7, 0, 1, 2, 3];
        const num = cell.stepPotential[namberDirection];
        neighbour.stepPotential[namberDirection] += cell.stepPotential[namberDirection];
        cell.stepPotential[oppositeSides[namberDirection]] += neighbour.stepPotential[oppositeSides[namberDirection]];
        cell.stepPotential[namberDirection] = 0;
        neighbour.stepPotential[oppositeSides[namberDirection]] = 0;

    }


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
        let coordsForMove = this.calculateCellPotential('player');
        const coordsForMove2 = this.calculateCellPotential('pc');
        // console.log(coordsForMove.potential+' '+coordsForMove2.potential);
        if ((coordsForMove.potential-1) < coordsForMove2.potential &&coordsForMove2.potential>=1) {
            coordsForMove = coordsForMove2;
        }
        const newField = field.slice();
        field[coordsForMove.coords.y][coordsForMove.coords.x] = new Step('pc', coordsForMove.coords.x, coordsForMove.coords.y);
        this.setState({})
        // const pcPotential = this.calculateCellPotential('pc');
    };

    calculateCellPotential = (type) => {
        const {fieldSize, field} = this.state;

        //create empty array for cell potential for move
        const resField = [];
        for (let i = 0; i < fieldSize + 2; i++) {
            resField[i] = [];
            for (let j = 0; j < fieldSize + 2; j++) {
                resField[i].push(0);
            }
        }
        //looking for the maximum potential for each cell
        for (let i = 1; i < fieldSize + 1; i++) {
            for (let j = 1; j < fieldSize + 1; j++) {
                const cell = field[i][j]; //initial cell

                if (this.isItStep(cell) && cell.type === type) {
                    const nearCells = this.getArrayNearCells(cell);
                    nearCells.forEach((neighbour, direction) => {
                        if (this.isItEmpty(neighbour)) {

                            const oppositeSides = [4, 5, 6, 7, 0, 1, 2, 3];

                            //for cells that may intersect in the future in one line
                            const nextCell = this.getNearCell(neighbour, direction); //it's the cell which is located one cell away from the initial cell
                            const value1 = cell.stepPotential[direction];
                            let value2 = 0;
                            if (this.isItStep(nextCell) && !this.isItBorder(nextCell)&&this.isHaveSameType(cell,nextCell)) {
                                value2 = nextCell.stepPotential[oppositeSides[direction]]
                            }

                            // for a cell that will has multiple intersections
                            const nextNearCells = this.getArrayNearCells(neighbour);
                            let countDangerousPotentials = 0;
                            nextNearCells.forEach((nextCell, nextCellDirection) => {
                                if (this.isItStep(neighbour) && !this.isItBorder(nextCell)&&this.isHaveSameType(cell,nextCell)) {
                                    if (nextCell.stepPotential[oppositeSides[nextCellDirection]] >=2) {
                                        countDangerousPotentials++;
                                    }
                                }
                            });

                            const intersectionPotential = countDangerousPotentials>=2? 3 : cell.stepPotential[direction];


                            resField[neighbour.y][neighbour.x] = Math.max(resField[neighbour.y][neighbour.x], value1 + value2,intersectionPotential);
                        }

                    })
                }
            }
        }

        return this.findMax(resField);
    };

    findMax = (arr) => {
        let max = 0;
        let coords = {};
        let potential = 0;
        arr.forEach((row, rowIndex) => row.forEach((item, colIndex) => {
            if (item > max) {
                max = item;
                coords = {y: rowIndex, x: colIndex};
                potential = max;
            }
        }));
        return {coords,potential};
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

            if (this.isHaveSameType(cell, nearCell)) {
                let res = this.oneLineMatch(nearCell, direction, 2, [cell, nearCell]);
                if (res) {
                    this.setState({
                        winner: res[0].type,
                        winSequence: res
                    })
                }
            }

        })

    };

    oneLineMatch = (cell, direction, count, array) => {

        if (count === 5) {
            return array
        }
        else {
            const neighbours = this.getNearCell(cell, direction);
            if (!this.isHaveSameType(cell, neighbours)) {
                return null
            }
            ;
            return this.oneLineMatch(neighbours, direction, count + 1, [...array, neighbours]);

        }
    }

    //generate array of game field with values for correct render
    fieldRender = () => {
        const {field, fieldSize, winSequence, winner} = this.state;


        if (!field) return [];
        //mark win sequence
        const copyField = field.slice();
        // console.log(copyField);

        winSequence.forEach((item) => {
            copyField[item.y][item.x].win = true;
        });

        const newField = [];
        for (let i = 1; i < fieldSize + 1; i++) {
            newField[i - 1] = [];
            for (let j = 1; j < fieldSize + 1; j++) {
                const item = copyField [i][j];
                const markWin = item.win ? 'mark-win' : null;
                if (!this.isItStep(item)) newField[i - 1].push(' ');
                else {
                    if (item.type === 'player') newField[i - 1].push(<i className={`fa fa-times ${markWin}`}></i>)
                    else newField[i - 1].push(<i className={`fa fa-circle-o ${markWin}`}></i>)
                }
            }
        }

        return newField;

    }

    render() {
        const {countMoves, winner, winSequence} = this.state;
        const {setWinner} = this.props;

        return (
            <GameField field={this.fieldRender()}
                       playerMove={this.playerMove}
                       moves={countMoves}
                       winner={winner}
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

