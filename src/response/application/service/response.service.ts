import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'src/response/domain/entity/response.entity';

@Injectable()
export class ResponseService {
  error(message: string, status: HttpStatus): Response {
    return {
      message,
      status,
    };
  }

  success(
    message: string,
    status: HttpStatus,
    data?: Record<string, any> | Record<string, any>[],
  ) {
    if (data) {
      return {
        message,
        status,
        data,
      };
    }
    return { message, status };
  }
}
