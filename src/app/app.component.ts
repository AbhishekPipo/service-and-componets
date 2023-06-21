import { Component } from '@angular/core';
import { RentalListService } from './rental-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'service-and-componets';
  // currentRentals={
  //   count: 1,
  //   titles: "cats"
  // }
  

  constructor(public rentalListSerive: RentalListService){
     

   

  }
  theRoom={
    title: "theRoom",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRObn7nRGDUK2zCmeRB--KWRsX6oDR1_qwKUNoCTIvyu0GkStMc"
  }
  wingCommander={
    title: "wingCommander",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXlu-eFmYj1yWwyqburHqEIR72jGOU6D0hoebbCzxt99ROKKur"
  }



  onRentMovie(movie: any){
    this.rentalListSerive.RentMovie(movie)
    // console.log("onRentMovie");
    // this.currentRentals.count++;
    // this.currentRentals.titles +=", "+movie.title;
  }


  onClearRentalList(){
    this.rentalListSerive.clear()
    // console.log("cleared");
    // this.currentRentals.count=0;
    // this.currentRentals.titles =" ";
  }
}
