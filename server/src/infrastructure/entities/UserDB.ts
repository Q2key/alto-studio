import { Entity, Column, OneToMany, JoinColumn } from "typeorm";
import { IUser } from "../../domain/entities/User/IUser";
import { BaseDBEntity } from "./BaseDBEntity";
import { UserRoles } from "../../domain/entities/UserRole/IUserRole";

@Entity("user")
export class UserDB extends BaseDBEntity implements IUser {
  constructor() {
    super();
  }

  @Column("varchar")
  firstName: string;

  @Column("numeric")
  role: UserRoles;

  @Column("varchar")
  middleName: string;

  @Column("varchar")
  lastName: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  passwordHash: string;

  @Column("varchar")
  salt: string;

  @Column("bool")
  active: boolean;

  @Column({ type: 'date', default: null })
  blockedAt: string;
}
