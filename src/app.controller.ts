import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AccountValidator } from './validator/account.validator';

@Controller('/v1/api')
export class AppController {
  constructor(
    private appService: AppService,
    private validator: AccountValidator,
  ) {}

  @Get()
  testGet() {
    // await this.roleService.create('ADMIN');
    // await this.roleService.create('USER');

    return 'test api';
  }

  @Post('/register')
  async register(@Body() body) {
    try {
      await this.appService.registerAdminAccount(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Username is existed',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  //check login
  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body) {
    try {
      const result = await this.appService.login(body);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid username or wrong password',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  //check jwt token
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
