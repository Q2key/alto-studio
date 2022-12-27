import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { IDBEntity } from "./IDBEntity";

export class BaseDBEntity implements IDBEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;

    @Column('date', { default: null })
    deletedAt: string
} 