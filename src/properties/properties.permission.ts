import { InferSubjects, Permissions } from 'nest-casl';
import { Properties, UserType } from '../types/@generated';
import { PropertiesSecurityActions } from '../security/actions/security-actions';

export type Subject = InferSubjects<typeof Properties>;
export const propertiesPermissions: Permissions<
  UserType,
  Subject,
  PropertiesSecurityActions
> = {
  [UserType.ADMIN]({ can }) {
    can(PropertiesSecurityActions.manage, Properties);
  },
  [UserType.CLIENT]({ can }) {
    can(PropertiesSecurityActions.readOne, Properties);
    can(PropertiesSecurityActions.readAll, Properties);
  },
  [UserType.VENDOR]({ can, user }) {
    can(PropertiesSecurityActions.readOne, Properties);
    can(PropertiesSecurityActions.readAll, Properties);
    can(PropertiesSecurityActions.create, Properties);
    can(PropertiesSecurityActions.update, Properties, { creatorId: user.id });
    can(PropertiesSecurityActions.removeOne, Properties, {
      creatorId: user.id,
    });
  },
};
