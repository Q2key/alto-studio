import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IUserEntity } from '../../domain/User/IUserEntity';
import { IDBEntity } from './IDBEntity';

@Entity()
export class UserEntity implements IUserEntity, IDBEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar')
    firstName: string;

    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}