import { Injectable } from '@angular/core';

@Injectable()
export class BoardValidatorService {

    DoesMoveCompleteBoard(board: number[][], row: number, column: number): boolean {
        if (this.CheckHorizontal(board, row) && this.CheckVertical(board, column) && this.CheckSquare(board, row, column)) {
            return true;
        }
        return false;
    }

    IsBoardComplete(board: number[][]): boolean {
        //Check all verticals and horizontals
        for (let i = 0; i < 9; i++) {
            if (!this.CheckHorizontal(board, i) || !this.CheckVertical(board, i)) {
                return false;
            }
        }
        //Check all squares
        for (let row = 0; row < 9; row += 3) {
            for (let column = 0; column < 9; column += 3) {
                if (!this.CheckSquare(board, row, column)) {
                    return false;
                }
            }
        }
        return true;
    }

    private CheckVertical(board: number[][], column: number): boolean {
        console.log("Check Vert");
        let values: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (values.includes(board[i][column]) || board[i][column] === null) {
                return false;
            }
            values.push(board[i][column]);
        }
        return true;
    }


    private CheckHorizontal(board: number[][], row: number): boolean {
        console.log("Check Horiz");
        let values: number[] = [];
        for (let j = 0; j < 9; j++) {
            console.log(values);
            console.log(board[row][j]);
            if (values.includes(board[row][j]) || board[row][j] === null) {
                return false;
            }
            values.push(board[row][j]);
        }
        return true;
    }

    private CheckSquare(board: number[][], row: number, column: number): boolean {
        console.log("Check Square");
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
