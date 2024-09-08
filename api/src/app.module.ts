import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './users/auth.module'; // For user auth
import { UsersModule } from './users/user.module'; // User-specific functionality
import { FavoritesModule } from './favorites/favorite.module'; // Favorite cats

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'milli the119',
      database: 'feline-pinterest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
