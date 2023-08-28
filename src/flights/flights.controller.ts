import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from '../dtos/create-flight.dto';
import { UpdateFlightDto } from '../dtos/update-flight.dto';
import { SearchFlight } from '../dtos/search-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @Get()
  findAll(@Body() searchFlight: SearchFlight) {
    return this.flightsService.findAll(searchFlight);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightsService.update(+id, updateFlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightsService.remove(+id);
  }
}
