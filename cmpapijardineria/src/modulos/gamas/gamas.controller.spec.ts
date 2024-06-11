import { Test, TestingModule } from '@nestjs/testing';
import { GamasController } from './gamas.controller';
import { GamasService } from './gamas.service';

describe('GamasController', () => {
  let controller: GamasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamasController],
      providers: [GamasService],
    }).compile();

    controller = module.get<GamasController>(GamasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
