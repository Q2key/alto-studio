import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from '../../domain/user/user.domain.interface';
import { UserUseCases } from '../use-cases/user/user.use-cases';
import { CreateUserDto } from '../../dto/user/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}
  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.userUseCases.findAll();
  }

  @Post()
  async post(@Body() createCatDto: CreateUserDto): Promise<IUser> {
    return await this.userUseCases.create(createCatDto);
  }
}
