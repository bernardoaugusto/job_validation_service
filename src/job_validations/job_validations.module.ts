import { Module } from '@nestjs/common';
import { JobValidationsService } from './job_validations.service';
import { JobValidationsController } from './job_validations.controller';

@Module({
  controllers: [JobValidationsController],
  providers: [JobValidationsService]
})
export class JobValidationsModule {}
