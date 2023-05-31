import { Test, TestingModule } from '@nestjs/testing';
import { JobValidationsController } from './job_validations.controller';
import { JobValidationsService } from './job_validations.service';

describe('JobValidationsController', () => {
  let controller: JobValidationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobValidationsController],
      providers: [JobValidationsService],
    }).compile();

    controller = module.get<JobValidationsController>(JobValidationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
