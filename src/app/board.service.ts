import { BoardValidatorService } from './board-validator.service';
import { Difficulty } from 'app/difficulty.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
    constructor(
        private BoardValidatorService: BoardValidatorService) { }

    CreateBoard(difficulty: Difficulty): number[][] {

    }

    private RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
