import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class UpdateCarDto {

    // @IsUUID()
    // @IsString()
    // @IsOptional()//los decoradores opcionales son para que no sean requeridos
    // readonly id?: string; //? es para que sea opcional en el desarrollo de la aplicacion

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsNumber()
    @IsOptional()
    readonly price?: number;
}

//nest g dto cars/dto/update-car.dto --no-spec
