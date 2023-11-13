import { AbstractLogger } from '../abs/abstract-logger';

export class PinoLogger extends AbstractLogger {
  debug(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.log(message);
  }

  info(message: string): void {
    console.log(message);
  }

  warn(message: string): void {
    console.log(message);
  }
}
