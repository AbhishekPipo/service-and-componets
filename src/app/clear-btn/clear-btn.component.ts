import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  styleUrls: ['./clear-btn.component.css']
})
export class ClearBtnComponent {
  @Output() clearRental= new EventEmitter();
  onClearBtnClicked(){
    this.clearRental.emit();
  }
}