import { BoardValidatorService } from './board-validator.service';
import { Difficulty } from 'app/difficulty.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
    constructor(private BoardValidatorService: BoardValidatorService) {

    }

    CreateBoard(difficulty: Difficulty): number[][] {
        console.log("Creating Board");
        let testBoard: number[][] = [
            [3,9,1,2,8,6,5,7,4],
            [4,8,7,3,5,9,1,2,6],
            [6,5,2,7,1,4,8,3,9],
            [8,7,5,4,3,1,6,9,2],
            [2,1,3,9,6,7,4,8,5],
            [9,6,4,5,2,8,7,1,3],
            [1,4,9,6,7,3,2,5,8],
            [5,3,8,1,4,2,9,6,7],
            [7,2,6,8,9,5,3,4,1]
        ]
        console.log(this.BoardValidatorService.IsMoveValid(testBoard, 0,0));
        return testBoard;
        // let temp: number[][] = [[]];
        // let finishedBoard: number[][] = this.CreateFullBoardRecursively(temp, 0,0);
        // return finishedBoard;
    }

    private CreateFullBoardRecursively(board: number[][], row: number, column: number): number[][] {
        let guesses: number[] = [];
        if (row === 8 && column === 8) {
            return board;
        }
        do {
            let guess: number = 0;
            do {
                guesses.push(guess);
                guess = this.RandomInt(1,9);
            } while (guesses.includes(guess));
            board[row][column] = guess;
            console.log("Is move valid: ", this.BoardValidatorService.IsMoveValid(board, row, column));
        } while (!this.BoardValidatorService.IsMoveValid(board, row, column));
        if (row === 8) {
            row = 0;
            column++;
        }
        return this.CreateFullBoardRecursively(board, row, column);
    }

    private RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
