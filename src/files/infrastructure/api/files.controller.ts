import {
  Controller,
  HttpStatus,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/utils/multer-options';
import 'dotenv';
import { FilesUploadService } from 'src/files/application/service/files-upload.service';

@Controller('file')
export class FilesController {
  constructor(private readonly filesUploadServer: FilesUploadService) {}

  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post('/')
  async upload(@UploadedFiles() files: File[]) {
    const uploadedFiles: string[] = await this.filesUploadServer.upload(files);
    return {
      status: HttpStatus.OK,
      message: '파일 업로드를 성공하였습니다.',
      data: {
        files: uploadedFiles,
      },
    };
  }
}
