import { AbstractLogger } from './abstract-logger';

export class ConsoleLogger extends AbstractLogger {
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
