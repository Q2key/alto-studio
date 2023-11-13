import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ApiConfig, AppConfig } from './contracts/app-config';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<AppConfig>);
  const apiConfig = configService.get<ApiConfig>('apiConfig');
  await app.listen(apiConfig.port);
})();
