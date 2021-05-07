import { HttpStatus } from '@nestjs/common';

export class Response {
  message: string;
  status: HttpStatus;
  data?: Record<string, any> | Record<string, any>[];
}
