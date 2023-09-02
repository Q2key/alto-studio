import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', default: '() => NOW();' })
  createdAt: string;

  @Column({ type: 'date', default: '() => NOW();' })
  updatedAt: string;

  @Column({ type: 'date', default: null })
  deletedAt: string;
}
