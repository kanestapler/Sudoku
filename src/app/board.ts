import { BoardService } from './board.service';
import { Difficulty } from "app/difficulty.enum";

export class Board {
    board: number[][];
    constructor(difficulty: Difficulty, private BoardService: BoardService) {
            this.board = BoardService.CreateBoard(difficulty);
    }
}
