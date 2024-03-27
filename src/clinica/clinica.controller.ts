import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { Clinica } from './entities/clinica.entity';

@Controller('clinica')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @Post()
  async create(@Body() createClinicaDto: CreateClinicaDto) {
    return await this.clinicaService.create(createClinicaDto);
  }

  @Get()
  async findAll():Promise<Clinica[]> {
    return await this.clinicaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clinicaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClinicaDto: UpdateClinicaDto) {
    return await this.clinicaService.update(+id, updateClinicaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clinicaService.remove(+id);
  }
}
