import { Module } from '@nestjs/common';
import { AirelinesService } from './airlines.service';
import { AirelinesController } from './airlines.controller';
import { Airlines } from 'src/entities/airlines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Airlines])],
  controllers: [AirelinesController],
  providers: [AirelinesService],
})
export class AirlinesModule {}
