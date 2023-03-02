import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('/v1/api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  testGet() {
    // await this.roleService.create('ADMIN');
    // await this.roleService.create('USER');

    return 'test api';
  }

  @Post('/register')
  register(@Body() body): Promise<any> {
    return this.appService.registerAdminAccount(body);
  }

  //check login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() body): Promise<any> {
    return this.appService.login(body);
  }

  //check jwt token
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
