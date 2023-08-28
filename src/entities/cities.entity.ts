import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class Cities {
    @PrimaryGeneratedColumn()
    idcities: number;

    @Column()
    city_name: string;

    @Column()
    ascii_name: string;

    @Column({type: "decimal", precision: 8, scale: 2, default: 0})
    lat: number;

    @Column({type: "decimal", precision: 8, scale: 2, default: 0})
    lng: number;

    @Column()
    country: string;

    @Column()
    iso2: string;

    @Column()
    iso3: string;

    @Column()
    admin_name: string;

    @Column()
    capital: string;

    @Column()
    population: number;
    
    @Column({type: "varchar", width: 12})
    id:number;
}