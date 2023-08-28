import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('airlines')
export class Airlines {
    @PrimaryGeneratedColumn()
    idairlines: number;

    @Column()
    iata: string;

    @Column()
    icao: string;

    @Column()
    airline: string;

    @Column()
    callsign: string;

    @Column()
    country: string;

    @Column()
    airlinescol: string;

    @Column()
    logo: string;
}