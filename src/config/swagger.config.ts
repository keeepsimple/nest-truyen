import { DocumentBuilder } from "@nestjs/swagger";

export function SwaggerConfig() {
  var config = new DocumentBuilder()
    .setTitle('Truyen API')
    .setDescription('Api for comic management')
    .setVersion('1.0')
    .build();
    
    return config;
}
