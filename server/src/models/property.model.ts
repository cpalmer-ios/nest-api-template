import { IsString, IsNotEmpty, IsNumberString } from "class-validator";

export class CreatePropertyModel {
    id: number;
    @IsString()
    img: string;
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsNotEmpty()
    @IsNumberString()
    price: string;
}