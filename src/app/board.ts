import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { Difficulty } from "app/difficulty.enum";

@Injectable()
export class Board {
    board: number[][];
    constructor(difficulty: Difficulty, private BoardService: BoardService) {
        //TODO: Either figure out using a service in a class or just delete the services and copy code here :()
        this.board = BoardService.CreateBoard(difficulty);
    }
}
