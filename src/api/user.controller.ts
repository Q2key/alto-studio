import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { IUser } from '../domain/user/user.domain.interface';
import { CreateUserDto } from 'src/contracts/dto/create-user.dto';
import { GetUsersUseCase } from '../use-cases/get-users/get-users.use-case';
import { CreateUserUseCase } from '../use-cases/create-user/create-user.use-case';
import { RenderableResponse } from 'nest-next';

@Controller()
export class UserController {
  constructor(
    private getUserUseCases: GetUsersUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}

  @Get('/users')
  public index(@Res() res: RenderableResponse) {
    res.render('home', {
      title: 'Next with Nest',
    });
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
