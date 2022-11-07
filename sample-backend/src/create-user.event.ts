import { CreateUserRequest } from "./create-user-request.dto";

export class CreateUserEvent {
  constructor(public readonly data:CreateUserRequest) {}
}
