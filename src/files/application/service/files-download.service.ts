import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import { FilesRepository } from 'src/files/infrastructure/repository/files.repository';
import { UnexpectedErrorException } from '../exception/unexpected-error.exception';

@Injectable()
export class FilesDownloadService {
  constructor(private readonly filesRepository: FilesRepository) {}

  async download(identifier: number) {
    const file = await this.filesRepository.findOne({ identifier });
    if (!file) {
      throw new UnexpectedErrorException();
    }
    return file.path;
  }
}
