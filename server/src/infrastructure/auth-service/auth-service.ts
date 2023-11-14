import { AbstractAuthService } from '../abs/abstract.auth-service';

export class ConcreteAuthService extends AbstractAuthService {
  validateUser(
    identity: string,
    password: string,
    salt: string | undefined,
  ): Promise<boolean> {
    return Promise.resolve(false);
  }
}
