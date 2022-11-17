import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IPlaneEntity } from '../../domain/Plane/IPlaneEntity';
import { IDBEntity } from './IDBEntity';

@Entity('plane')
export class PlaneEntity implements IPlaneEntity, IDBEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;


    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}