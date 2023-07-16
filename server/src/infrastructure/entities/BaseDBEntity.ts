import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IDBEntity } from "./IDBEntity";

export class BaseDBEntity implements IDBEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'date', default: '() => NOW();' })
    createdAt: string;

    @Column({ type: 'date', default: '() => NOW();' })
    updatedAt: string;

    @Column({ type: 'date', default: null })
    deletedAt: string
} 