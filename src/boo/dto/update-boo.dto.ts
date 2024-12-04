import { PartialType } from '@nestjs/swagger';
import { CreateBooDto } from './create-boo.dto';

export class UpdateBooDto extends PartialType(CreateBooDto) {}
