import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Decorador para indicar que esta clase representa una entidad
export class Clinica {

    @PrimaryGeneratedColumn() // Decorador para la columna de clave primaria auto-generada
    id: number;

    @Column({ type: 'text', nullable:false }) // Decorador para una columna de tipo varchar
    nombre: string;

    @Column({ type: 'text', nullable:true })
    codigo: string;

    @Column({ type: 'bigint', nullable:true })
    telefono: number;

    @Column({ type: 'text', nullable:true })
    email: string;

    @Column({ type: 'text', nullable:true })
    direccion: string;

    @Column({ type: 'text', nullable:true })
    departamento: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

}
