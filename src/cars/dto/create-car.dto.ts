import { IsString, IsNumber } from 'class-validator';

export class CreateCarDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;
}

