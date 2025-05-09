import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
@Injectable()
export class CarsService {
    private readonly cars: Car[] = [
        {
            "id": "b1961bce-b181-426c-802c-c591112b0fd3",
            "name": "Ford",
            "price": 10000
        },
        {
            "id": "70a75e33-5f9e-47ea-ab86-0cfbc819c9af",
            "name": "BMW",
            "price": 20000
        },
        {
            "id": "d366a18b-ac3b-4b2f-89d0-aa9b62f1c4f7",
            "name": "Mercedes",
            "price": 30000
        }
    ];


    findAllCars() {
        return this.cars;
    }
    findOneCarById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car
    }

    create(createCarDto: CreateCarDto) {
        const newCar = { id: uuid(), ...createCarDto };
        this.cars.push(newCar);
        return newCar;
    }
}

//nest g service cars  --no-spec