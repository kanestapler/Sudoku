import { Injectable } from '@angular/core';
import { BoardService } from './board.service';

@Injectable()
export class Board {
    board: number[][];
    constructor(difficulty: string, private BoardService: BoardService) {
        //TODO: Either figure out using a service in a class or just delete the services and copy code here :()
        this.board = BoardService.CreateBoard(difficulty);
    }
}
