import { Entity, Column, OneToMany, JoinColumn } from 'typeorm'
import { IUser } from '../../domain/entities/User/IUser';
import { BaseDBEntity } from './BaseDBEntity';
import { ProjectEntity } from './ProjectEntity';
import {IUserRole} from "../../domain/entities/UserRole/IUserRole";
import {ISubscription} from "../../domain/entities/Subscribtion/ISubscription";

@Entity('subscriptions')
export class SubscriptionEntity extends BaseDBEntity implements ISubscription {
    constructor() {
        super();
    }

    @Column('boolean')
    available: boolean;

    @Column('varchar')
    description: string;

    @Column('varchar')
    name: string;
}