import { Controller, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateUserRequest } from './create-user-request.dto';
import { Request } from 'express';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  async createUser(@Req() req: Request) {
    await this.appService.createUser(req.body);
  }

  // @Get('analytics')
  // getAnalytics() {
  //   return this.appService.getAnalytics();
  // }
}
