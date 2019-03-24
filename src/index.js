module.exports = function solve(matrix){
    solve(0,0);
    
    function solve(i, j) {
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++){

                if (matrix[i][j] !== 0) { 

                    if (!(row(i, j) && col(i,j) && region3X3(i, j))) {
                        break;
                    } 

                } else {

                    for (let num = 1; num <= 9; num++) {
                        matrix[i][j] = num;
                        if (row(i, j) && col(i,j) && region3X3(i, j)) {
                            if (solve(i, j)) {
                            return true;
                            }
                        }
                    }

                    matrix[i][j] = 0;
                    return false;

                }
            }

        }

        return true;
    
    }    
  
    function row(i,j) {
        for (let y = 0; y < 9; y++) {
            if (y !== j && matrix[i][y] === matrix[i][j]) return false;
        }
        return true;
    }
  
    function col(i,j) {
        for (let x = 0; x < 9; x++) {
            if (x !== i && matrix[x][j] === matrix[i][j]) return false;
        }
        return true;
    }
  
    function region3X3(i, j) {
         y = Math.floor(i / 3);
         x = Math.floor(j / 3);
  
        for (let rows = y * 3; rows < y * 3 + 3; rows++) {
            for (let colm = x * 3; colm < x * 3 + 3; colm++) {
                if (rows !== i && colm !== j && matrix[rows][colm] === matrix[i][j]) return false;
            }
        }
        return true;
     }
     return matrix;
    // console.log(matrix);
    } 