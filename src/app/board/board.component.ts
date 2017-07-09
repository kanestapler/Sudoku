import { BoardValidatorService } from './../board-validator.service';
import { BoardService } from './../board.service';
import { Board } from './../board';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

    completed: boolean;
    keys: string[];
    difficultyString: string;
    board: Board;

    constructor(private BoardService: BoardService, private BoardValidatorService: BoardValidatorService) {
        this.keys = ['Easy', 'Medium', 'Hard'];
        this.difficultyString = 'Easy';
        this.board = new Board('Easy', BoardService);
        this.completed = false;
     }

     CheckIfBoardIsComplete() {
         if (this.BoardValidatorService.IsBoardComplete(this.board.board)) {
             this.completed = true;
         } else {
             this.completed = false;
         }
     }

    ngOnInit() {
    }

    rebuild() {
        this.board = new Board(this.difficultyString, this.BoardService);
    }

}
