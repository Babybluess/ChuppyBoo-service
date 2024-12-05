import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  // Fetch all cards details
  @Get()
  async getAllCards(): Promise<any[]> {
    return this.cardService.getAllCards();
  }

  // Fetch card details by id: id, name, type
  @Get('detail/:id')
  async getCardDetailsById(@Param('id') id: string): Promise<any> {
    return this.cardService.getCardDetailsById(id);
  }
}
