import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinica } from './entities/clinica.entity';
import { Repository } from 'typeorm';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';

@Injectable()
export class ClinicaService {
  constructor(
    @InjectRepository(Clinica)
    private readonly clinicaRepository: Repository<Clinica>,
  ) {}
  async create(createClinicaDto: CreateClinicaDto): Promise<Clinica> {
    const clinica = this.clinicaRepository.create(createClinicaDto);
    return await this.clinicaRepository.save(clinica);
  }

  async findAll(): Promise<Clinica[]> {
    return await this.clinicaRepository.find();
  }

  async findOne(id: number): Promise<Clinica | undefined> {
    return await this.clinicaRepository.findOne({where:{
      id:id
    }});
  }

  async update(id: number, updateClinicaDto: UpdateClinicaDto): Promise<Clinica | undefined> {
    const existingClinica = await this.clinicaRepository.findOne({where:{
      id:id
    }});
    
    if (!existingClinica) {
      return undefined;
    }
    const updatedClinica = Object.assign(existingClinica, updateClinicaDto);
    return await this.clinicaRepository.save(updatedClinica);
  }

  async remove(id: number): Promise<void> {
    await this.clinicaRepository.delete(id);
  }
}
