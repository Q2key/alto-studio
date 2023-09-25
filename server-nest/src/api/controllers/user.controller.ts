import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserUseCases } from '../../use-cases/user.use-cases';
import { IUser } from '../../domains/entities/user.interface';

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
