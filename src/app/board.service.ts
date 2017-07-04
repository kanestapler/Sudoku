import { BoardValidatorService } from './board-validator.service';
import { Difficulty } from 'app/difficulty.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
    constructor(private BoardValidatorService: BoardValidatorService) {

    }

    CreateBoard(difficulty: Difficulty): number[][] {
        let finishedBoard: number[][] = this.CreateFullBoardRecursively([[]], 0,0);
        return finishedBoard;
    }

    private CreateFullBoardRecursively(board: number[][], row: number, column: number): number[][] {
        if (row === 8 && column === 8) {
            return board;
        }
        do {
            let guess = this.RandomInt(1,9);
            board[row][column] = guess;
        } while (this.BoardValidatorService.IsMoveValid(board, row, column));
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
