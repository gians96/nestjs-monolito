import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';
export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'COROLA',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Camry',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mustang',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Hyundai',
        createdAt: new Date().getTime(),
    }
]