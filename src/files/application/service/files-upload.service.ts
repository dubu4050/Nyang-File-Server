import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Files } from 'src/files/domain/entity/files.entity';
import { FilesType } from 'src/files/domain/type/files.type';
import { FilesRepository } from 'src/files/infrastructure/repository/files.repository';
import { createImageURL } from 'src/common/utils/create-image-url';
import { UnexpectedErrorException } from '../exception/unexpected-error.exception';

@Injectable()
export class FilesUploadService {
  constructor(private readonly filesRepository: FilesRepository) {}

  async upload(files: File[]): Promise<number[] | undefined> {
    try {
      const generatedFiles: number[] = [];
      for (const file of files) {
        const extension = file['mimetype'].split('/').slice(1)[0];
        const savedFile = await this.filesRepository.create({
          name_original: file['filename'],
          size: file['size'],
          extension: FilesType[extension],
          path: process.env.SERVER_ADDRESS + file['path'],
        });
        await this.filesRepository.save(savedFile);
        generatedFiles.push(savedFile.identifier);
      }
      return generatedFiles;
    } catch (error) {
      console.log(error);
      throw new UnexpectedErrorException();
    }
  }
}
