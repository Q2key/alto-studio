import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { IUser } from '../domain/user/user.domain.interface';
import { CreateUserDto } from 'src/contracts/dto/create-user.dto';
import { GetUsersUseCase } from '../use-cases/get-users/get-users.use-case';
import { CreateUserUseCase } from '../use-cases/create-user/create-user.use-case';

@Controller()
export class UserController {
  constructor(
    private getUserUseCases: GetUsersUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}

  @Get('/login')
  @Render('home')
  public index() {
    return { title: 'hello' };
  }

  @Get('/api/users')
  async findAll(): Promise<IUser[]> {
    return await this.getUserUseCases.execute();
  }

  @Post('/api/user')
  async post(@Body() createCatDto: CreateUserDto): Promise<IUser> {
    return await this.createUserUseCase.execute(createCatDto);
  }
}
