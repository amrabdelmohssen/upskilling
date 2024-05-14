import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { CarCard, SystemType } from 'src/app/interfaces/car-card.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router:Router, private carService : CarService) {}
 
cars:CarCard[] = [
 {
    id: 1,
    model: 'Audi R8',
    review: 4.6,
    price: 2100,
    isAirConditioning: true,
    doorsNumber: 4,
    passangersNumber: 2,
    reviewCount: 1345,
    image: '../../assets/imges/card/car1.png',
    transmission: SystemType.Auto,

    make: 'Nissan',
    year: 2020,
    color: 'Black',
    mileage: 22000,
    fuelType: 'Gasoline',
    engine: '2.5L 4-cylinder',
    horsepower: 188,
    features: [
      'Remote Start',
      'Automatic Emergency Braking',
      'Lane Keeping Assist',
    ],
    owners: 1,
  }
]
  ngOnInit(): void { this.getAllCars()}
  getAllCars(): void {
    this.carService
      .getAllCars(4)
      .pipe(
        take(1),
        tap((res) => {
          
          this.cars = res;
        })
      )
      .subscribe();
  }
  navigateToAllVehiclesPage(){
    this.router.navigate(['home/all-vehicles'])
  }
}
