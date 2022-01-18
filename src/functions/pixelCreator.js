/* eslint-disable no-console */
const getNumbersDivisibleBy8 = () => {
    const tempArray = [];
    for (let i = 8; i <= 256; i += 8) {
        tempArray.push(i);
    }
    return tempArray;
};

const createPixels = () => {
    // getting arrays from 8...256
    const red = getNumbersDivisibleBy8();
    const green = getNumbersDivisibleBy8();
    const blue = getNumbersDivisibleBy8();
    const numRows = 256;
    const numCols = 128;

    // creating rgb combos
    const createColors = () => {
        const rgbList = [];
        for (let r = 0; r < red.length; r += 1) {
            for (let g = 0; g < green.length; g += 1) {
                for (let b = 0; b < blue.length; b += 1) {
                    rgbList.push(`rgb(${red[r]}, ${green[g]}, ${blue[b]})`);
                }
            }
        }
        return rgbList;
    };

    const grid = createColors();

    const createEmptyGrid = () => {
        const rows = [];
        for (let i = 0; i < numRows; i += 1) {
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    };

    const fillEmptyGrid = () => {
        const a = createEmptyGrid();

        for (let i = 0; i < numRows; i += 1) {
            for (let j = 0; j < numCols; j += 1) {
                const randomColor = Math.floor(Math.random() * (grid.length));
                a[i][j] = grid[randomColor];
                grid.slice(randomColor, 1);
            }
        }
        return a;
    };

    const finalGrid = fillEmptyGrid();
    return finalGrid;
};

export default createPixels;
