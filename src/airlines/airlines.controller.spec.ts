import { Test, TestingModule } from '@nestjs/testing';
import { AirelinesController } from './airlines.controller';
import { AirelinesService } from './airlines.service';

describe('AirelinesController', () => {
  let controller: AirelinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirelinesController],
      providers: [AirelinesService],
    }).compile();

    controller = module.get<AirelinesController>(AirelinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
