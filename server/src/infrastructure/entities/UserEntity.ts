import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IUserEntity } from '../../domain/User/IUserEntity';

@Entity()
export class UserEntity implements IUserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string;
}