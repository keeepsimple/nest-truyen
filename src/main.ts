import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //config swagger
  const document = SwaggerModule.createDocument(app, SwaggerConfig());
  SwaggerModule.setup('api', app, document);

  //config cors
  app.enableCors();

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
