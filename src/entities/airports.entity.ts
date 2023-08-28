import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('airports')
export class Airports {
    @PrimaryGeneratedColumn()
    idairport: number;

    @Column()
    iata: string;

    @Column()
    icao: string;

    @Column()
    location: string;

    @Column()
    airport: string;

    @Column()
    country: string;
}