import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAllCars();
    }

    @Get(':id')
    getOneCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneCarById(+id);
    }

    @Post()
    createCar(@Body() body: any) {
        return body
    }

    @Patch(':id')
    updateCarById(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return { id, body }
    }

    @Delete(':id')  
    deleteCarById(@Param('id', ParseIntPipe) id: number) {
        return { id, method: 'DELETE' }
    }
}

// nest g controller cars  --no-spec