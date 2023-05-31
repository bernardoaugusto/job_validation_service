import { Injectable } from '@nestjs/common';
import { JobValidationDto } from './dto/job_validation';

@Injectable()
export class JobValidationsService {
  execute(jobValidationDto: JobValidationDto) {
    return jobValidationDto;
  }
}
