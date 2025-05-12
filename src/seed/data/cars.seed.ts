import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        name: 'Toyota',
        model: 'COROLA',
        price: 2020
    },
    {
        id: uuid(),
        name: 'Toyota',
        model: 'Camry',
        price: 2020
    },
    {
        id: uuid(),
        name: 'Ford',
        model: 'Mustang',
        price: 2020
    },
    {
        id: uuid(),
        name: 'Honda',
        model: 'Civic',
        price: 2020
    },
    {
        id: uuid(),
        name: 'Hyundai',
        model: 'Elantra',
        price: 2020
    }
]