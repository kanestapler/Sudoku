import { BoardService } from './board.service';
import { BoardValidatorService } from './board-validator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { Board } from "./board";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardValidatorService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
