function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const spotlightGrid = [];

    for (let i = 0; i < rows; i++) {
        spotlightGrid.push(new Array(cols).fill(0));
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        spotlightGrid[i][j] = calculateSpotlightSum(grid, i, j);
        }
    }
    return spotlightGrid;
}
function calculateSpotlightSum(grid, row, col) {
const rows = grid.length;
const cols = grid[0].length;
let sum = 0;

for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
            sum += grid[i][j];
        }
        }
    }

    return sum;
}