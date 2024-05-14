import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css'],
})
export class SearchCarComponent {
  searchCarBtn = new FormControl();
  @Output() onFilterCar = new EventEmitter<string>();

  getFilterCar(): void {
    this.onFilterCar.emit(this.searchCarBtn.value);
  }
}
