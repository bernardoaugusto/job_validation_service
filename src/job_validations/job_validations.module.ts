import { Module } from '@nestjs/common';
import { JobValidationsService } from './job_validations.service';
import { JobValidationsController } from './job_validations.controller';
import { ChatGptService } from 'src/chat_gpt/chat_gpt.service';

@Module({
  controllers: [JobValidationsController],
  providers: [JobValidationsService, ChatGptService],
})
export class JobValidationsModule {}
