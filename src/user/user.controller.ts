import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller({ version: '1', path: 'user' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Fetch user details: name, diamond, totalNFTs, history battle
  @Get(':id/profile')
  showProfile(@Param('id') userId: string) {
    return this.userService.getUserDetails(userId);
  }
}
