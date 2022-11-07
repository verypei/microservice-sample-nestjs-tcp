import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  handleUserCreated(@Payload() data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }

  @EventPattern('user_update')
  handleEditedEmail(@Payload() data:any){
    this.appService.handleEditedEmail(data.data)
  }
}
