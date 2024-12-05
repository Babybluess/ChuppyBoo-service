import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // Fetch all events details
  @Get()
  async getAllEvents(): Promise<any[]> {
    return this.eventService.getAllEvents();
  }

  // Fetch event details by id: id, name, type
  @Get('detail/:id')
  async getEventDetailsById(@Param('id') id: string): Promise<any> {
    return this.eventService.getEventDetailsById(id);
  }
}
