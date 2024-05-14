export interface CarCard {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: SystemType;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
  review : number , 
  reviewCount : number ,
  isAirConditioning: true,
  doorsNumber: 4,
  passangersNumber: 2,
}

export enum SystemType {
  Manual = 'Manual',
  Auto = 'Automatic',
  CVT= 'CVT'
}
