import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { CarCard, SystemType } from 'src/app/interfaces/car-card.interface';
import { ContactUsPayload } from 'src/app/interfaces/contact-us';
import { CarService } from 'src/app/services/car.service';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  contactUsForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
  });
  successfulRes = '';
  constructor(
    private router: Router,
    private carService: CarService,
    private contactUsService: ContactUsService,
    private fb: FormBuilder
  ) {}

  cars: CarCard[] = [
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
    },
  ];

  filteredCars: CarCard[] = [];
  ngOnInit(): void {
    this.getAllCars();
  }

  getFilterCar(searchValue: string): void {
    if (searchValue) {
      const searchCarBtnValue = searchValue.toLowerCase().trim();
      this.filteredCars = this.cars.filter((car) => {
        debugger;
        const name = `${car.make} ${car.model}`.toLowerCase();
        return (
          name.includes(searchCarBtnValue) || searchCarBtnValue.includes(name)
        );
      });
    } else {
      this.filteredCars = [...this.cars];
    }
  }
  postContactUs(): void {
    this.contactUsService
      .postContactUs(this.contactUsForm.value as ContactUsPayload)
      .subscribe({
        next: (res: { message: string }) => {
          debugger;
          console.log(res);
          this.successfulRes = res.message;

          setTimeout(() => {
            this.successfulRes = '';
          }, 5000);
        },
      });
  }
  getAllCars(): void {
    this.carService
      .getAllCars(4)
      .pipe(
        take(1),
        tap((res) => {
          this.cars = res;
          this.getFilterCar('');
        })
      )
      .subscribe();
  }
  navigateToAllVehiclesPage() {
    this.router.navigate(['home/all-vehicles']);
  }
}
