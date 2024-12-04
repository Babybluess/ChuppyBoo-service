import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/profile')
  async showProfile(@Param('id') userId: string) {
    const profile = await this.userService.showProfile(userId);
    if (!profile) {
      return { message: 'User not found' };
    }
  }
}
