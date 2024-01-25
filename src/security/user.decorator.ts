import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserSecurity } from '../types/user.security';

export const currentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const { id, roles, isSuperAdmin, phoneNumber }: UserSecurity =
      GqlExecutionContext.create(context).getContext().req.user;
    return {
      id,
      roles,
      isSuperAdmin,
      phoneNumber,
    };
  },
);
