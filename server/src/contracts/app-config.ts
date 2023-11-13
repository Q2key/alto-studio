export interface PostgresConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface ApiConfig {
  port: number;
}

export interface AppConfig {
  apiConfig: ApiConfig;
  postgresConfig: PostgresConfig;
}
