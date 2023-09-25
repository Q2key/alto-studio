import { IUser } from './user.domain.interface';

export enum UserRoles {
  Admin,
  User,
  Guest,
}

export class UserDomain implements IUser {
  readonly id: string | undefined;
  firstName: string;
  role: UserRoles;
  middleName: string | undefined;
  lastName: string;
  email: string;
  passwordHash: string;
  salt: string;
  active: boolean;
  blockedAt: string | undefined;
  constructor(
    firstName: string,
    middleName: string | undefined,
    lastName: string,
    email: string,
    passwordHash: string,
    salt: string,
    role: UserRoles,
    active: boolean,
    blockedAt: string | undefined,
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.salt = salt;
    this.role = role;
    this.active = active;
    this.blockedAt = blockedAt;
  }
}
