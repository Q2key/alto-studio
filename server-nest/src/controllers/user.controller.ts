import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from '../domain/user/user.domain.interface';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { GetUsersUserUseCase } from '../use-cases/get-users/get-users-user.use-case';
import { CreateUserUseCase } from '../use-cases/create-user/create-user.use-case';

@Controller('user')
export class UserController {
  constructor(
    private getUserUseCases: GetUsersUserUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}
  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.getUserUseCases.execute();
  }

  @Post()
  async post(@Body() createCatDto: CreateUserDto): Promise<IUser> {
    return await this.createUserUseCase.execute(createCatDto);
  }
}
