import { IsString, IsNumber } from 'class-validator';

export class CreateCarDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly model: string;

    @IsNumber()
    readonly price: number;
}

