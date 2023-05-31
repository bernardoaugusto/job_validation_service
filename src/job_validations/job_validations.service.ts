import { Injectable } from '@nestjs/common';
import { JobValidationDto } from './dto/job_validation';
import { ChatGptService } from 'src/chat_gpt/chat_gpt.service';

@Injectable()
export class JobValidationsService {
  constructor(private readonly chatGpt: ChatGptService) {}

  execute(jobValidationDto: JobValidationDto) {
    return this.chatGpt.execute(jobValidationDto.description);
  }
}
