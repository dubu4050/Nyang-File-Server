import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseModule } from 'src/response/response.module';
import { FilesDownloadService } from './application/service/files-download.service';
import { FilesUploadService } from './application/service/files-upload.service';
import { FilesController } from './infrastructure/api/files.controller';
import { FilesRepository } from './infrastructure/repository/files.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FilesRepository]), ResponseModule],
  providers: [FilesUploadService, FilesDownloadService],
  controllers: [FilesController],
})
export class FileModule {}
