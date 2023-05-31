import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatGptService {
  public async execute(message: string) {
    const openai = this.configChatGpt();

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return response.data.choices[0].message.content;
  }

  private configChatGpt() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }
}
