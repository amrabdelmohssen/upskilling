import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { CarCard, SystemType } from 'src/app/interfaces/car-card.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  carId:string = ''
  carDetails: CarCard  = {
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
    };
    constructor(private activatedRout:ActivatedRoute , private carService:CarService , private router:Router) {
      activatedRout.paramMap.subscribe((params:any) => {
        
       this.carId = params.params.id
      })
     }
  
    ngOnInit(): void {
      
      this.carService.getCarById(this.carId).pipe(take(1),tap((res:CarCard)=> this.carDetails = res)).subscribe()
    }
  
    navigateToAnotherPage(path:string) : void {
      this.router.navigate([path])
    }
}
