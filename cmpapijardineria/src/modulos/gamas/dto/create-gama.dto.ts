import { IsOptional, IsString, Length } from "class-validator";

export class CreateGamaDto {
    @IsString()
    @Length(13)
    nombre: string;
    
    @IsString()
    @Length(50)
    descripcion: string;

    @IsString()
    @IsOptional()
    thumbnailUrl?: string;
    
}
