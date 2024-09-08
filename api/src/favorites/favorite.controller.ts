import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  getFavorites(@Body('userId') userId: number) {
    return this.favoritesService.findAll(userId);
  }

  @Post()
  addFavorite(@Body('catId') catId: string, @Body('userId') userId: number) {
    return this.favoritesService.addFavorite(catId, userId);
  }

  @Delete(':catId')
  removeFavorite(@Param('catId') catId: string, @Body('userId') userId: number) {
    return this.favoritesService.removeFavorite(catId, userId);
  }
}
