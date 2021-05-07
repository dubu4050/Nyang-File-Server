import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer-options';
import 'dotenv';
import { FilesUploadService } from 'src/files/application/service/files-upload.service';
import { FilesDownloadService } from 'src/files/application/service/files-download.service';
import { ResponseService } from 'src/response/application/service/response.service';
import { ExceptionInterceptor } from 'src/common/interceptor/exception.interceptor';

@Controller('file')
export class FilesController {
  constructor(
    private readonly filesUploadService: FilesUploadService,
    private readonly filesDownloadService: FilesDownloadService,
    private readonly responseService: ResponseService,
  ) {}

  @UseInterceptors(ExceptionInterceptor)
  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post('/')
  async upload(@UploadedFiles() files: File[]) {
    try {
      const uploadedFiles: number[] = await this.filesUploadService.upload(
        files,
      );
      return this.responseService.success(
        '파일 업로드를 성공하였습니다.',
        HttpStatus.CREATED,
        uploadedFiles,
      );
    } catch (error) {
      return this.responseService.error(
        error.response.message,
        error.response.statusCode,
      );
    }
  }

  @UseInterceptors(ExceptionInterceptor)
  @Get('/:identifier')
  async download(@Param() identifier: number) {
    try {
      const path = await this.filesDownloadService.download(
        identifier['identifier'],
      );

      return this.responseService.success(
        '파일 다운로드를 성공하였습니다.',
        HttpStatus.OK,
        { path },
      );
    } catch (error) {
      return this.responseService.error(error.response, error.status);
    }
  }
}
