import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirelinesService } from './airlines.service';
import { CreateAirelineDto } from '../dtos/create-aireline.dto';
import { UpdateAirelineDto } from '../dtos/update-aireline.dto';

@Controller('airlines')
export class AirelinesController {
  constructor(private readonly airelinesService: AirelinesService) {}

  @Post()
  create(@Body() createAirelineDto: CreateAirelineDto) {
    return this.airelinesService.create(createAirelineDto);
  }

  @Get()
  findAll() {
    return this.airelinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airelinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirelineDto: UpdateAirelineDto) {
    return this.airelinesService.update(+id, updateAirelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airelinesService.remove(+id);
  }
}
