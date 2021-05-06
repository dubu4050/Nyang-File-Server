import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './application/service/files-download.service';
import { FilesController } from './infrastructure/api/files.controller';
import { FilesRepository } from './infrastructure/repository/files.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FilesRepository])],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FileModule {}
