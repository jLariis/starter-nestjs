import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('flight')
export class Flights {
    @PrimaryGeneratedColumn()
    idflight: number;

    @Column()
    orig_airport: string;

    @Column()
    dest_airport: string;

    @Column()
    idairlines: number;

    @Column()
    date: Date;

    @Column()
    price: number;

    @Column()
    currency: String;

    @CreateDateColumn()
    createdDate: Date;

}
