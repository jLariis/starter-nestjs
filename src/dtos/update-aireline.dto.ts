import { PartialType } from '@nestjs/mapped-types';
import { CreateAirelineDto } from './create-aireline.dto';

export class UpdateAirelineDto extends PartialType(CreateAirelineDto) {}
