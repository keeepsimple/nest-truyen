// import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { redisStore } from 'cache-manager-redis-store';

// export const RedisConfig: CacheModuleAsyncOptions = {
//   isGlobal: true,
//   imports: [ConfigModule],
//   useFactory: async (configService: ConfigService) => {
//     const store = await redisStore({
//       socket: {
//         host: configService.get<string>('REDIS_HOST'),
//         port: parseInt(configService.get<string>('REDIS_PORT')!),
//       },
//       ttl: parseInt(configService.get<string>('REDIS_TTL')!),
//     });
//     return {
//       store: () => store,
//     };
//   },
//   inject: [ConfigService],
// };
