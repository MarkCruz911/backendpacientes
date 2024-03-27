import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicaModule } from './clinica/clinica.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from './clinica/entities/clinica.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '74678959Mm',
    database: 'pacientes',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Solo para propósitos de desarrollo
  }),ClinicaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
