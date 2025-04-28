import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private readonly cars = [{ id: 1, name: 'Ford', price: 10000 }, { id: 2, name: 'BMW', price: 20000 }, { id: 3, name: 'Mercedes', price: 30000 }];

    findAllCars() {
        return this.cars;
    }
    findOneCarById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car
    }
}

//nest g service cars  --no-spec