import { Entity, Column } from 'typeorm'
import { IUserEntity } from '../../domain/entities/User/IUser';
import { BaseDBEntity } from './BaseDBEntity';

@Entity('user')
export class UserEntity extends BaseDBEntity implements IUserEntity {
    constructor() {
        super();
    }

    @Column('varchar')
    firstName: string;
}