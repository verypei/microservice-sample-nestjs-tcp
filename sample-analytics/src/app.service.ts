import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly analytics: any[] = [];

constructor(
  @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
){}

  handleUserCreated(data: CreateUserEvent) {
    console.log(data.data);
    
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(data.data),
    );
  }

  handleEditedEmail(data:any){
    console.log(data,"---data balikan");
    
  }

  getAnalytics() {
    return this.analytics;
  }
}
