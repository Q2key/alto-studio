import { Logger } from '../../contracts/logger';

export abstract class AbstractLogger implements Logger {
  abstract debug(message: string): void;

  abstract error(message: string): void;

  abstract info(message: string): void;

  abstract warn(message: string): void;
}
