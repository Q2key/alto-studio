import { Entity, Column } from 'typeorm'
import { IUser } from '../../domain/entities/User/IUser';
import { BaseDBEntity } from './BaseDBEntity';

@Entity('user')
export class UserEntity extends BaseDBEntity implements IUser {
    constructor() {
        super();
    }

    @Column('varchar')
    firstName: string;
}