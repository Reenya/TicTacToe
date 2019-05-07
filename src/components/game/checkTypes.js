const isItStep = (item) => {
    if (item.type !== ('emptyCell' || 'border')) return true;

    return false;
};

const isItBorder = (item) => {
    if (item.type === 'border') return true;

    return false;
};

const isItEmpty = (item) => {
    if (item.type === 'emptyCell') return true;

    return false;
};

const isHaveSameType = (cell, neighbour) => {
    if (cell.type === neighbour.type && !isItEmpty(cell) && !isItEmpty(neighbour)) return true
    else return false;
};

const isHaveOppositeType = (cell, neighbour) => {
    if (cell.type !== neighbour.type && !isItEmpty(cell) && !isItEmpty(neighbour) && !isItBorder(neighbour) && !isItBorder(cell)) return true
    else return false;
};

export {isItStep, isItBorder, isItEmpty, isHaveSameType, isHaveOppositeType};