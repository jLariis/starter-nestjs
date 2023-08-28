import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { Airports } from 'src/entities/airports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Airports])],
  controllers: [AirportsController],
  providers: [AirportsService],
})
export class AirportsModule {}
