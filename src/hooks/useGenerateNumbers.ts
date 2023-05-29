export const useGenerateNumbers = () => {
    let grid = createEmptyGrid();
    let shuffledGrid = fillGrid(grid);
    return shuffledGrid;
  };
  
  function createEmptyGrid() {
    let grid = [];
    for (var i = 0; i < 9; i++) {
      let innerGrid = []
      for (var j = 0; j < 9; j++) {
        innerGrid.push(0)
      }
      grid.push(innerGrid)
    }
    return grid;
  }
  
  function fillGrid(grid: number[][]) {
    // return solveSudoku(grid, 0, 0);
    if (solveSudoku(grid, 0, 0)) {
      return groupAndShuffleNumbers(grid);
    }
    return []; // No solution found
  }
  const groupAndShuffleNumbers = (grid: number[][]) => {
    // This is kind of a wierd shuffling i'll be doing using Fisher Yates
    let numberUnderGroup = 0;
    let groupedIndexes = [];
    let innerGroup = [];
    for (let index = 0; index < 9; index++) {
      // start grouping the numbers
      if (Math.floor(index / 3) > numberUnderGroup) {
        numberUnderGroup += 1;
        groupedIndexes.push(innerGroup);
        innerGroup = [];
      }
      innerGroup.push(grid[index]);
      // group also at the last iteration
      if (index === 8) {
        groupedIndexes.push(innerGroup);
      }
    }
    let newArray:number[][] = [];
    // Now we'll perform the shuffle in each of those groups
    for (let index = 0; index < groupedIndexes.length; index++) {
      shuffleNumbers(groupedIndexes[index]);
      newArray = newArray.concat(groupedIndexes[index]);
    }
    return groupAndShuffleNumberColumns(newArray);
  };
  const shuffleNumbers = (groupedIndex: number[][]) => {
    // Using Fisher Yates Algorithm
    for (let index = groupedIndex.length - 1; index >= 0; index--) {
      let randomSelectedIndex = Math.floor(Math.random() * (index + 1));
      const tempIndex = groupedIndex[randomSelectedIndex];
      groupedIndex[randomSelectedIndex] = groupedIndex[index];
      groupedIndex[index] = tempIndex;
    }
  };
  const groupAndShuffleNumberColumns = (arr: number[][]) => {
    let numberUnderGroup = 0;
    let groupedIndexes = [];
    let innerGroup = [];
    for (let index = 0; index < 9; index++) {
      // start grouping the numbers
      if (Math.floor(index / 3) > numberUnderGroup) {
        numberUnderGroup += 1;
        groupedIndexes.push(innerGroup);
        innerGroup = [];
      }
      innerGroup.push(index);
      // group also at the last iteration
      if (index === 8) {
        groupedIndexes.push(innerGroup);
      }
    }
    let newArray:number[] = [];
    for (let index = 0; index < groupedIndexes.length; index++) {
      shuffleNumberColumns(groupedIndexes[index]);
      newArray = newArray.concat(groupedIndexes[index]);
    }
    let finalArray = [];
    for (let index = 0; index < newArray.length; index++) {
      let innerArray = [];
      for (let j = 0; j < newArray.length; j++) {
        innerArray.push(arr[index][newArray[j]]);
      }
      finalArray.push(innerArray);
    }
    return finalArray;
  };
  const shuffleNumberColumns = (groupedIndex: number[]) => {
    // Using Fisher Yates Algorithm
    for (let index = groupedIndex.length - 1; index >= 0; index--) {
      let randomSelectedIndex = Math.floor(Math.random() * (index + 1));
      const tempIndex = groupedIndex[randomSelectedIndex];
      groupedIndex[randomSelectedIndex] = groupedIndex[index];
      groupedIndex[index] = tempIndex;
    }
  };
  const  solveSudoku = (grid: number[][], row: number, col: number): boolean => {
    if (col === 9) {
      col = 0;
      row++;
      if (row === 9) {
        return true; // Reached the end, Sudoku solved
      }
    }
  
    if (grid[row][col] !== 0) {
      // Cell is already filled, move to the next cell
      return solveSudoku(grid, row, col + 1);
    }
  
    // Generate a row of unique numbers 1 to 9 and use the indexes to add
    // so grid[row][col] = numList[index]
    let numList = [];
    for (let i = 0; i < 9; i++) {
      let randomNumber = 0;
      do {
        randomNumber = Math.floor(Math.random() * 9 + 1);
      } while (numList.indexOf(randomNumber) >= 0);
      numList.push(randomNumber);
    }
  
    for (let index = 0; index < numList.length; index++) {
      if (isValidMove(grid, row, col, numList[index])) {
        grid[row][col] = numList[index];
        if (solveSudoku(grid, row, col + 1)) {
          return true; // Found a solution
        }
        grid[row][col] = 0; // Backtrack
      }
    }
  
    return false; // No solution found
  }
  
  const isValidMove = (grid: number[][], row:number, col:number, num: number) => {
    // Check if the number already exists in the row
    for (var i = 0; i < 9; i++) {
      if (grid[row][i] === num) {
        return false;
      }
    }
  
    // Check if the number already exists in the column
    for (var j = 0; j < 9; j++) {
      if (grid[j][col] === num) {
        return false;
      }
    }
  
    // Check if the number already exists in the 3x3 grid
    var startRow = Math.floor(row / 3) * 3;
    var startCol = Math.floor(col / 3) * 3;
  
    for (var m = 0; m < 3; m++) {
      for (var n = 0; n < 3; n++) {
        if (grid[startRow + m][startCol + n] === num) {
          return false;
        }
      }
    }
  
    return true;
  }