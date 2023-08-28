import { Injectable } from '@nestjs/common';
import { CreateAirportDto } from '../dtos/create-airport.dto';
import { UpdateAirportDto } from '../dtos/update-airport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airports } from 'src/entities/airports.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirportsService {
  constructor(
    @InjectRepository(Airports)
    private airportsRepository: Repository<Airports>
  ){}

  create(createAirportDto: CreateAirportDto) {
    return 'This action adds a new airport';
  }

  async findAll() {
    return await this.airportsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} airport`;
  }

  update(id: number, updateAirportDto: UpdateAirportDto) {
    return `This action updates a #${id} airport`;
  }

  remove(id: number) {
    return `This action removes a #${id} airport`;
  }
}
