import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FilesType } from './files.type';

@Entity()
export class Files {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  identifier: number;

  /*properties*/
  @Column({ type: 'varchar', length: 100 })
  name_original: string;
  @Column({ type: 'varchar', length: 100 })
  name_edit: string;
  @Column()
  size: number;
  @Column({ type: 'enum', enum: FilesType })
  extension: FilesType;
  @CreateDateColumn()
  created_date: Date;
  @UpdateDateColumn()
  updated_date: Date;
  @Column({ type: 'varchar', length: 36 })
  path: string;
}
// 원본파일명, 수정파일명, size, 확장자, 등록일, 수정일, 경로
