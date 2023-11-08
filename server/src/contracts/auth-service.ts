export interface AuthService {
  validateUser: (
    identity: string,
    password: string,
    salt?: string,
  ) => Promise<boolean>;
}
