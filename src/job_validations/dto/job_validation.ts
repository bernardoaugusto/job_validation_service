import { IsNotEmpty } from 'class-validator';

export class JobValidationDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
