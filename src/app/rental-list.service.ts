import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RentalListService{
    currentRentals={
        count: 1,
        titles: "cats"
      }
      RentMovie(movie: any){
        console.log("onRentMovie");
        this.currentRentals.count++;
        this.currentRentals.titles +=", "+movie.title;
      }
    
    
      clear(){
        this.currentRentals.count=0;
        this.currentRentals.titles =" ";
      }    
}