import { IsNumber, IsOptional, IsPositive, IsString, Length, MinLength } from "class-validator";

export class CreateProductoDto {

    @IsString()
    @Length(13)
    cod: string;

    @IsString()
    @Length(13)
    nombre: string;

    @IsString()
    @Length(13)
    provedor: string;

    @IsString()
    @Length(50)
    descripcion: string;

    @IsPositive()
    @IsNumber()
    stock: number;

    @IsPositive()
    @IsNumber()
    pvp: number;

    @IsPositive()
    @IsNumber()
    pcoste: number;

    @IsString()
    @IsOptional()
    thumbnailUrl?: string;

    @IsString()
    @MinLength(1)
    codgama: string;
}
