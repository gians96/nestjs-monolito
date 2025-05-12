import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]//Se exporta para que otros modulos hagan uso de este servicio
})
export class CarsModule { }

//nest g module cars --no-spec