import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    constructor(private readonly carsService: CarsService) //Esto es una inyeccion de dependencias
    { }

    @Get()
    getAllCars() {
        return this.carsService.findAllCars();
    }

    @Get(':id')

    // getOneCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    getOneCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findOneCarById(id);
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCarById(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() UpdateCarDto: UpdateCarDto) {
        return this.carsService.update(id, UpdateCarDto);
    }


    @Delete(':id')
    deleteCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }
}

// nest g controller cars  --no-spec