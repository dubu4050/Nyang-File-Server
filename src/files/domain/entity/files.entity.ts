import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FileState } from '../type/file-state.type';
import { FilesType } from '../type/files.type';

@Entity()
export class Files {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  identifier: number;

  /*properties*/
  @Column({ type: 'varchar', length: 100, nullable: false })
  name_original: string;
  @Column({ type: 'varchar', length: 100, default: null })
  name_edit: string;
  @Column({ type: 'int', nullable: false })
  size: number;
  @Column({ type: 'enum', enum: FilesType, nullable: false })
  extension: FilesType;
  @CreateDateColumn({ type: 'datetime', nullable: false })
  created_date: Date;
  @UpdateDateColumn({ type: 'datetime', default: null })
  updated_date: Date;
  @Column({ type: 'varchar', length: 100, nullable: false })
  path: string;
  @Column({ type: 'enum', enum: FileState, default: FileState.EXIST })
  isDeleted: FileState;
}
// 원본파일명, 수정파일명, size, 확장자, 등록일, 수정일, 경로
