import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getAllEvents(): Promise<any[]> {
    return await this.prisma.event.findMany({
      select: {
        id: true,
        name: true,
        type: true,
      }
    })
  }

  async getEventDetailsById(id: string): Promise<any> {
    const event = await this.prisma.event.findUnique({
      where: {id},
      select: {
        id: true,
        name: true,
        type: true,
      }
    })

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }
}
