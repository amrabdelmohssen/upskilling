import { Component, Input } from '@angular/core';
import { CarCard } from '../../../interfaces/car-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
@Input() carCard!:CarCard
constructor(private router:Router){}
navigateToCarDetails(id:number){
 this.router.navigate([`home/all-vehicles/car/${id}`])
}
}
