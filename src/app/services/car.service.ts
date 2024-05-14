import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, tap } from 'rxjs';
import { ApiService } from './api.service';
import { CarCard, SystemType } from '../interfaces/car-card.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private apiService: ApiService) {}
  getAllCars(limit?:number): Observable<CarCard[]> {
    let options 
    if(limit) {
     options = {
      params : {
        limit 
      }
     }
    }
    return this.apiService.get(`cars`,options).pipe(
      map((res) =>
        res.map((item: CarCard, index: number) => {
          
          item = {
            ...item,
            review: 4.6,
            price: 2100,
            isAirConditioning: true,
            doorsNumber: 4,
            passangersNumber: 2,
            reviewCount: 1345,
          };
          if (index % 2) {
            item.transmission = SystemType.Manual;
            item.image =  '../../assets/imges/card/car1.png'

          } else {
            item.transmission = SystemType.Auto;
            item.image =  '../../assets/imges/card/car3.png'

          }
          return item;
        })
      )
    );
  }

  getCarById(id: string): Observable<CarCard> {
    return this.apiService.get(`cars/${id}`).pipe(
      map((item) =>{
        
        item = {
          ...item,
          review: 4.6,
          price: 2100,
          isAirConditioning: true,
          doorsNumber: 4,
          passangersNumber: 2,
          reviewCount: 1345,
        }
        if (Number(item.id) % 2) {
          item.transmission = SystemType.Manual;
          item.image =  '../../assets/imges/card/car1.png'

        } else {
          item.transmission = SystemType.Auto;
          item.image =  '../../assets/imges/card/car3.png'

        }
        return item;
      
    
      }
    ));
  }
}
