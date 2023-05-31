import { Test, TestingModule } from '@nestjs/testing';
import { JobValidationsService } from './job_validations.service';

describe('JobValidationsService', () => {
  let service: JobValidationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobValidationsService],
    }).compile();

    service = module.get<JobValidationsService>(JobValidationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
