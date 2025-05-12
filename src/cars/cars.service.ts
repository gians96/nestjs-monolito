import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index';
@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     "id": "b1961bce-b181-426c-802c-c591112b0fd3",
        //     "name": "Ford",
        //     "model": "Mustang",
        //     "price": 10000
        // },
        // {
        //     "id": "70a75e33-5f9e-47ea-ab86-0cfbc819c9af",
        //     "name": "BMW",
        //     "model": "320",
        //     "price": 20000
        // },
        // {
        //     "id": "d366a18b-ac3b-4b2f-89d0-aa9b62f1c4f7",
        //     "name": "Mercedes",
        //     "model": "GLE",
        //     "price": 30000
        // }
    ];


    findAllCars() {
        return this.cars;
    }
    findOneCarById(id: string) {
        if (!id) throw new BadRequestException(`Car id is required`);
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car
    }

    create(createCarDto: CreateCarDto) {
        const newCar = { id: uuid(), ...createCarDto };
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        if (!id) {
            throw new BadRequestException('Id is required');
        }

        let carDB = this.findOneCarById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB
            }
            return car;
        })
        return carDB;
    }

    delete(id: string) {
        this.findOneCarById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return {
            message: `Car with id ${id} deleted`,
            cars: this.cars
        }
    }
    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars
    }
}

//nest g service cars  --no-spec