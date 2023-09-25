import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from '../domain/user/user.domain.interface';
import { UserUseCases } from '../use-cases/user/user.use-cases';

@Controller('user')
export class UserController {
  constructor(private useCases: UserUseCases) {}
  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.useCases.findAll();
  }

  @Post()
  async post(@Body() createCatDto: unknown): Promise<IUser> {
    return await this.useCases.create(createCatDto);
  }
}
