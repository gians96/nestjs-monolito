import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED, BRANDS_SEED } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService, // Para hacer uso de este servicio, tiene que estar expuesto o exportado en el modulo de cars y ser importado en el modulo de seed
    private readonly brandsService: BrandsService// Para hacer uso de este servicio, tiene que estar expuesto o exportado en el modulo de brands y ser importado en el modulo de seed
  ) {

  }

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return "executed";
  }
}
