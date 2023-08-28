import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from 'src/entities/flights.entity';
import { Airlines } from 'src/entities/airlines.entity';
import { Airports } from 'src/entities/airports.entity';
import { Cities } from 'src/entities/cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flights, Airlines, Airports, Cities])],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
