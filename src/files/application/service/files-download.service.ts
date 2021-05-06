import { Injectable } from '@nestjs/common';
import { FilesRepository } from 'src/files/infrastructure/repository/files.repository';
import { createImageURL } from 'src/utils/create-image-url';

@Injectable()
export class FilesService {
  constructor(private readonly filesRepository: FilesRepository) {}

  async download(identifier: number) {
    const file = await this.filesRepository.findOne({ identifier });
    return file.path;
  }
}
