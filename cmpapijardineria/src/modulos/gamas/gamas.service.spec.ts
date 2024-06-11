import { Test, TestingModule } from '@nestjs/testing';
import { GamasService } from './gamas.service';

describe('GamasService', () => {
  let service: GamasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamasService],
    }).compile();

    service = module.get<GamasService>(GamasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
