import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent {
@Input() movie: any;
@Output() rentMovie=new EventEmitter();
onRentalBtnClicked(){
  this.rentMovie.emit(this.movie);

}
}
