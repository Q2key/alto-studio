import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { IDBEntity } from "./IDBEntity";

export class BaseDBEntity implements IDBEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('date', { default: null })
    createdAt: string;

    @Column('date', { default: null })
    updatedAt: string;

    @Column('date', { default: null })
    deletedAt: string
} 