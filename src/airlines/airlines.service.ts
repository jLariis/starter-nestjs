import { Injectable } from '@nestjs/common';
import { CreateAirelineDto } from '../dtos/create-aireline.dto';
import { UpdateAirelineDto } from '../dtos/update-aireline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airlines } from 'src/entities/airlines.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirelinesService {
  constructor(
    @InjectRepository(Airlines)
    private airlinesRepository: Repository<Airlines>
  ) {}

  create(createAirelineDto: CreateAirelineDto) {
    return 'This action adds a new aireline';
  }

  async findAll() {
    return await this.airlinesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} aireline`;
  }

  update(id: number, updateAirelineDto: UpdateAirelineDto) {
    return `This action updates a #${id} aireline`;
  }

  remove(id: number) {
    return `This action removes a #${id} aireline`;
  }
}
