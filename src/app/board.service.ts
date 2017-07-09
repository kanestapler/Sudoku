import { BoardValidatorService } from './board-validator.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
    constructor(private BoardValidatorService: BoardValidatorService) {

    }

    CreateBoard(difficulty: string): number[][] {
        let testBoard: number[][] = [
            [3, 9, 1, 2, 8, 6, 5, 7, 4],
            [4, 8, 7, 3, 5, 9, 1, 2, 6],
            [6, 5, 2, 7, 1, 4, 8, 3, 9],
            [8, 7, 5, 4, 3, 1, 6, 9, 2],
            [2, 1, 3, 9, 6, 7, 4, 8, 5],
            [9, 6, 4, 5, 2, 8, 7, 1, 3],
            [1, 4, 9, 6, 7, 3, 2, 5, 8],
            [5, 3, 8, 1, 4, 2, 9, 6, 7],
            [7, 2, 6, 8, 9, 5, 3, 4, 1]
        ]
        let randomBoard: number[][] = this.RemoveRandomValuesFromBoard(this.CreateRandomBoard(), difficulty);
        return randomBoard;
    }

    private CreateRandomBoard(): number[][] {
        let outputBoard: number[][] = [[],[],[],[],[],[],[],[],[]];
        return this.CreateFullBoardRecursively(outputBoard, 0,0);
    }

    private RemoveRandomValuesFromBoard(board: number[][], difficulty: string) {
        let numbersToRemove: number;
        if (difficulty === 'Easy') {
            numbersToRemove = 40;
        } else if (difficulty === 'Medium') {
            numbersToRemove = 55;
        } else if (difficulty === 'Hard') {
            numbersToRemove = 70;
        }
        while (numbersToRemove > 0) {
            let column = this.RandomInt(0, 8);
            let row = this.RandomInt(0, 8);
            board[row][column] = null;
            numbersToRemove--;
        }
        return board;
    }


    private CreateFullBoardRecursively(board: number[][], row: number, column: number): number[][] {
        let guesses: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let guess: number;
        let myRow: number = row;
        let myColumn: number = column;
        let nextRow: number = myRow;
        let nextColumn: number = myColumn + 1;
        if (myColumn === 8) {
            nextRow++;
            nextColumn = 0;
        }

        if (myRow >= 9) {
            return board;
        }

        for (let i=0; i < 9; i++) {
            let guessIndex: number = this.RandomInt(0, (guesses.length - 1));
            guess = guesses[guessIndex];
            board[myRow][myColumn] = guess;
            guesses.splice(guessIndex, 1);
            if (this.BoardValidatorService.IsMoveValid(board, myRow, myColumn)) {
                board = this.CreateFullBoardRecursively(board, nextRow, nextColumn);
                if (nextRow===9 || board[nextRow][nextColumn] != null) {
                    return board;
                }
            }
        }
        
        board[myRow][myColumn] = null;
        return board;

    }

    private RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private ConsoleLogBoard(board: number[][]): void {
        for (let i = 0; i < 9; i++) {
            console.log(board[i][0] + " " + board[i][1] + " " + 
                        board[i][2] + " " + board[i][3] + " " +
                        board[i][4] + " " + board[i][5] + " " +
                        board[i][6] + " " + board[i][7] + " " +
                        board[i][8] + " "
                        );
        }
    }
}
