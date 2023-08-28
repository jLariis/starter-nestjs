import { Test, TestingModule } from '@nestjs/testing';
import { AirelinesService } from './airlines.service';

describe('AirelinesService', () => {
  let service: AirelinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirelinesService],
    }).compile();

    service = module.get<AirelinesService>(AirelinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
