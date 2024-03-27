import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsNumber } from "class-validator";


export class CreateClinicaDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;
    @IsString()
    @IsOptional()
    codigo?:string;
    @IsNumber()
    @IsOptional()
    telefono?:number;
    @IsString()
    @IsOptional()
    email?:string;
    @IsString()
    @IsOptional()
    direccion?:string;
    @IsString()
    @IsOptional()
    departamento?:string;
}
