import { Difficulty } from 'app/difficulty.enum';
import { BoardValidatorService } from './board-validator.service';
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
        testBoard = this.RemoveRandomValuesFromBoard(testBoard, difficulty);
        return testBoard;
        // let temp: number[][] = [[]];
        // let finishedBoard: number[][] = this.CreateFullBoardRecursively(temp, 0,0);
        // return finishedBoard;
    }

    private RemoveRandomValuesFromBoard(board: number[][], difficulty: Difficulty) {
        let numbersToRemove: number;
        if (difficulty === Difficulty.easy) {
            numbersToRemove = 40;
        } else if (difficulty === Difficulty.medium) {
            numbersToRemove = 50;
        }  else if (difficulty === Difficulty.hard) {
            numbersToRemove = 60;
        }
        while(numbersToRemove > 0) {
            let column = this.RandomInt(0,8);
            let row = this.RandomInt(0,8);
            board[row][column] = null;
            numbersToRemove--;
        }
        return board;
    }


    private CreateFullBoardRecursively(board: number[][], row: number, column: number): number[][] {
        let guesses: number[] = [];
        let guess: number = this.RandomInt(1,9);
        board[row][column] = guess;
        if (this.BoardValidatorService.IsMoveValid(board, row, column)) {
            
        }
        return board;

    }

    private RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
