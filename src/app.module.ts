import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptService } from './chat_gpt/chat_gpt.service';
import { JobValidationsModule } from './job_validations/job_validations.module';

@Module({
  imports: [JobValidationsModule],
  controllers: [AppController],
  providers: [AppService, ChatGptService],
})
export class AppModule {}
