import { Injectable } from '@nestjs/common';
import { JobValidationDto } from './dto/job_validation';
import { ChatGptService } from 'src/chat_gpt/chat_gpt.service';

@Injectable()
export class JobValidationsService {
  constructor(private readonly chatGpt: ChatGptService) {}

  public async execute(jobValidationDto: JobValidationDto) {
    const propmt = this.promptBuilder(jobValidationDto);

    try {
      const response = await this.chatGpt.execute(propmt);
      return this.formatResponse(response);
    } catch (error) {
      return { error: 'Erro ao executar o chatbot' };
    }
  }

  private promptBuilder(jobValidationDto: JobValidationDto) {
    return `
    Avalie se a seguinte vaga é compatível com:
    1 - Vaga Júnior
    2 - Vaga que contenha alguma das stacks: Node.js | React | JavaScript | Java | C#
    3 - Não precisar de mais de um ano de experiência
    4 - Não precisar de graduação
    5 - Não precisar de inglês avançado ou fluente
    6 - Ser uma vaga relacionada a desenvolvimento de software

    E formate sua resposta em formato JSON de forma retornar um boolean se a vaga é compatível ou não e com as hard skills presentes no texto, exemplo de retorno desejado:
   
    {
    "vaga_junior": true,
    "hard_skills_compativel": false,
    "nao_precisa_de_grande_experiencia": false,
    "nao_precisa_de_graduacao": false,
    "nao_precisa_de_ingles_avancado": false,
    "vaga_relacionada_a_desenvolvimento_de_software": true,
    "hard_skills": ["PHP", "JavaScript"]
    "motivo_das_resposta": "A vaga é Júnior e não precisa de inglês avançado, mas precisa de PHP e JavaScript"
    }
   

    Regra: sempre retornar apenas um json como resposta.
​
    Título da vaga: ${jobValidationDto.title}
    Descrição da vaga: ${jobValidationDto.description}
   `;
  }

  private formatResponse(responseMessage: string) {
    console.log(responseMessage);
    const response = JSON.parse(responseMessage);

    return {
      job_junior: response.vaga_junior,
      hard_skills_compatible: response.hard_skills_compativel,
      low_experience: response.nao_precisa_de_grande_experiencia,
      without_graduation: response.nao_precisa_de_graduacao,
      low_english_level: response.nao_precisa_de_ingles_avancado,
      job_related_to_software_development:
        response.vaga_relacionada_a_desenvolvimento_de_software,
      reason_for_answer: response.motivo_das_resposta,
      job_approved:
        response.hard_skills_compativel &&
        response.nao_precisa_de_grande_experiencia &&
        response.nao_precisa_de_graduacao &&
        response.nao_precisa_de_ingles_avancado,
      hard_skills: response.hard_skills,
    };
  }
}
