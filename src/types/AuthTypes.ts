import { Users } from './@generated';
import { Scalar } from '@nestjs/graphql';

@Scalar('LoginResponse')
export class LoginResponse {
  access_token?: string;
  refresh_token: string;
  user: Partial<Users>;
}

export type Tokens = {
  access_token: string;
  refresh_token: string;
};
