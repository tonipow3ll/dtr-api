import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { IUser } from 'src/interfaces/users-interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) { }
  @Get()
  async findAll(): Promise<IUser[]> {
    return this.userService.findAll()
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<IUser> {
    return this.userService.findOne(id)

  }
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.userService.create(createUserDto)
  }
  @Put(':id')
  update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string {
    return `Updated User ID: ${id} - User Name: ${updateUserDto.name}`
  }
}
