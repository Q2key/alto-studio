import { Entity, Column, OneToMany, JoinColumn } from 'typeorm'
import { IUser } from '../../domain/entities/User/IUser';
import { BaseDBEntity } from './BaseDBEntity';
import { ProjectEntity } from './ProjectEntity';
import { IUserRole, UserRoles} from "../../domain/entities/UserRole/IUserRole";

@Entity('user')
export class UserEntity extends BaseDBEntity implements IUser {
    constructor() {
        super();
    }

    @Column('varchar')
    firstName: string;

    @Column('numeric')
    role: UserRoles;
}