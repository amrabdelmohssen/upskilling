import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { CarCard, SystemType } from 'src/app/interfaces/car-card.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent {
  carCard: CarCard = {
    id: 1,
    model: 'Audi R8',
    review: 4.6,
    price: 2100,
    isAirConditioning: true,
    doorsNumber: 4,
    passangersNumber: 2,
    transmission: SystemType.Auto,
    reviewCount: 1345,
    image: '../../assets/imges/card/car1.png',

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
  };
  allCars: CarCard[] = [];
  carsPerPage: CarCard[] = [];

  constructor(private carsService: CarService, private router: Router) {}
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars(): void {
    this.carsService
      .getAllCars()
      .pipe(
        take(1),
        tap((res) => {
          this.allCars = res;
          this.carsPerPage = this.allCars.slice(0, 12);
        })
      )
      .subscribe();
  }
  navigateToHome(): void {
    this.router.navigateByUrl('/home');
  }

  displayItemAsperPagination(event: CarCard[]): void {
    this.carsPerPage = [...event];
  }
}
