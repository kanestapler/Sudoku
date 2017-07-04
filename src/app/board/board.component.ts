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

    board: Board;

    constructor(private BoardService: BoardService) {
        this.board = new Board(Difficulty.easy, BoardService);
     }

    ngOnInit() {
    }

}
