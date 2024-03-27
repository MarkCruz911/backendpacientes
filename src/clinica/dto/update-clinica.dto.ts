import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicaDto } from './create-clinica.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsNumber } from "class-validator";


export class UpdateClinicaDto extends PartialType(CreateClinicaDto) {
    @IsString()
    @IsOptional()
    nombre?:string;
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
