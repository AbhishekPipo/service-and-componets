import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { ClearBtnComponent } from './clear-btn/clear-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    MovieTileComponent,
    ClearBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
