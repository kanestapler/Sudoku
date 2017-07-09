import { Injectable } from '@angular/core';

@Injectable()
export class BoardValidatorService {

    DoesMoveCompleteBoard(board: number[][], row: number, column: number): boolean {
        if (this.CheckHorizontalForWin(board, row) && this.CheckVerticalForWin(board, column) && this.CheckSquareForWin(board, row, column)) {
            return true;
        }
        return false;
    }

    IsBoardComplete(board: number[][]): boolean {
        //Check all verticals and horizontals
        for (let i = 0; i < 9; i++) {
            if (!this.CheckHorizontalForWin(board, i) || !this.CheckVerticalForWin(board, i)) {
                return false;
            }
        }
        //Check all squares
        for (let row = 0; row < 9; row += 3) {
            for (let column = 0; column < 9; column += 3) {
                if (!this.CheckSquareForWin(board, row, column)) {
                    return false;
                }
            }
        }
        return true;
    }

    IsMoveValid(board: number[][], row: number, column: number): boolean {
        if (this.CheckIfVerticalValid(board, row, column) && this.CheckIfHorizontalValid(board, row, column) && this.CheckIfSquareValid(board, row, column)) {
            return true;
        } else {
            return false;
        }
    }

    private CheckIfVerticalValid(board: number[][], row: number, column: number): boolean {
        let values: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (values.includes(board[i][column])) {
                return false;
            }
            if (board[i][column] != null) {
                values.push(board[i][column]);
            }
        }
        return true;
    }

    private CheckIfHorizontalValid(board: number[][], row: number, column: number): boolean {
        let values: number[] = [];
        for (let j = 0; j < 9; j++) {
            if (values.includes(board[row][j])) {
                return false;
            }
            if (board[row][j] != null) {
                values.push(board[row][j]);
            }
        }
        return true;
    }

    private CheckIfSquareValid(board: number[][], row: number, column: number): boolean {
        row = row - (row % 3);// Should always give either 0, 3, 6
        column = column - (column % 3);
        let values: number[] = [];
        for (let i = row; i < (row + 3); i++) {
            for (let j = column; j < (column + 3); j++) {
                if (values.includes(board[i][j])) {
                    return false;
                } 
                if (board[i][j] != null) {
                    values.push(board[i][j]);
                }
            }
        }
        return true;
    }

    private CheckVerticalForWin(board: number[][], column: number): boolean {
        let values: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (values.includes(board[i][column]) || board[i][column] === null) {
                return false;
            }
            values.push(board[i][column]);
        }
        return true;
    }


    private CheckHorizontalForWin(board: number[][], row: number): boolean {
        let values: number[] = [];
        for (let j = 0; j < 9; j++) {
            if (values.includes(board[row][j]) || board[row][j] === null) {
                return false;
            }
            values.push(board[row][j]);
        }
        return true;
    }

    private CheckSquareForWin(board: number[][], row: number, column: number): boolean {
        row = row - (row % 3);// Should always give either 0, 3, 6
        column = column - (column % 3);
        let values: number[] = [];
        for (let i = row; i < (row + 3); i++) {
            for (let j = column; j < (column + 3); j++) {
                if (values.includes(board[i][j]) || board[i][j] === null) {
                    return false;
                } else {
                    values.push(board[i][j]);
                }
            }
        }
        return true;
    }
}
