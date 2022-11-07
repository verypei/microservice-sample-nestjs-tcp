import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  constructor(
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ){}

  async handleUserCreated(data: CreateUserEvent) {
    // console.log(data.data);
    data.data.email = "email edited"
    console.log(data.data,"=---edited---=");
    
    const dataSend = this.analyticsClient.emit(
      'user_update',
      new CreateUserEvent(data.data),
    );
    // console.log(dataSend,"---DS---");
    
  }
}
