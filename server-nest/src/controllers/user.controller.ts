import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserUseCases } from '../domain/user/user.use-cases';
import { IUser } from '../domain/entity/user.interface';

@Controller('user')
export class UserController {
  constructor(@Inject('UserUseCases') private useCases: UserUseCases) {}
  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.useCases.findAll();
  }

  @Post()
  async post(@Body() createCatDto: unknown): Promise<IUser> {
    return await this.useCases.create(createCatDto);
  }
}
