import { AuthService } from '../../contracts/auth-service';

export abstract class AbstractAuthService implements AuthService {
  abstract validateUser(
    identity: string,
    password: string,
    salt: string | undefined,
  ): Promise<boolean>;
}
