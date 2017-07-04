import { BoardService } from './board.service';
import { BoardValidatorService } from './board-validator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardValidatorService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
