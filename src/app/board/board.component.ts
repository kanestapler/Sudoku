import { BoardValidatorService } from './../board-validator.service';
import { BoardService } from './../board.service';
import { Difficulty } from 'app/difficulty.enum';
import { Board } from './../board';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

    completed: boolean;

    board: Board;

    constructor(private BoardService: BoardService, private BoardValidatorService: BoardValidatorService) {
        this.board = new Board(Difficulty.easy, BoardService);
        this.completed = false;
     }

     CheckIfBoardIsComplete(row: number, column: number) {
         if (this.BoardValidatorService.DoesMoveCompleteBoard(this.board.board, row, column)) {
             this.completed = true;
         } else {
             this.completed = false;
         }
     }

    ngOnInit() {
    }

}
