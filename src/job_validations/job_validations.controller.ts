import {
  Controller,
  Body,
  Post,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JobValidationsService } from './job_validations.service';
import { JobValidationDto } from './dto/job_validation';

@Controller('job-validations')
export class JobValidationsController {
  constructor(private readonly jobValidationsService: JobValidationsService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  execute(@Body() jobValidationDto: JobValidationDto) {
    return this.jobValidationsService.execute(jobValidationDto);
  }
}
