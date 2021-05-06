import { Injectable } from '@nestjs/common';
import { createImageURL } from 'src/utils/create-image-url';

@Injectable()
export class FilesUploadService {
  async upload(files: File[]): Promise<string[] | undefined> {
    const generatedFiles: string[] = [];

    for (const file of files) {
      generatedFiles.push(createImageURL(file));
    }
    return generatedFiles;
  }
}
