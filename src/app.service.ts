import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello harish welcome to nest and enjoy your journey';
  }
}
