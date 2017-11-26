import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleService {

  constructor() { }

  log(target: any) {
    console.log(target);
  }
  logWithMessage(message: string, target: any) {
    console.log(message, target);
  }
}
