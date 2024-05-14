import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarCard } from '../../../interfaces/car-card.interface';
import { PaginationNavigationType } from '../../../interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  pagesCount = 0;
  itemsCountPerPage = 12;
  itemsEachPerPage: CarCard[] = [];
  pageNumberArr: number[] = [];
  PaginationNavigationType = PaginationNavigationType;
  @Output() onPageChange = new EventEmitter<CarCard[]>();
  allCars: CarCard[] = [];
  @Input() set items(value: CarCard[]) {
    debugger
    if (value) {
      this.allCars = value;
      this.pagesCount = Math.round(value.length / this.itemsCountPerPage);
      this.pageNumberArr = []
      for (let index = 0; index < this.pagesCount; index++) {
        this.pageNumberArr.push(index);
      }
    }
  }

  currentPage: number = 1;

  naviagteToAnotherPage(value: PaginationNavigationType | number): void {
    
    if (typeof value === 'number') {
      this.currentPage = value;
    } else if (value === PaginationNavigationType.next) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const start = (this.currentPage - 1) * this.itemsCountPerPage;
    let end = this.currentPage * this.itemsCountPerPage;
    if (start < this.allCars.length) {
      this.itemsEachPerPage = this.allCars.slice(start, end);
      this.onPageChange.emit(this.itemsEachPerPage);
    }
  }
}
