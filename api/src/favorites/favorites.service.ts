import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';
import { User } from '../users/user.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite) private favoritesRepository: Repository<Favorite>,
  ) {}

  async findAll(userId: number): Promise<Favorite[]> {
    return this.favoritesRepository.find({ where: { user: { id: userId } } });
  }

  async addFavorite(catId: string, userId: number): Promise<Favorite> {
    const favorite = this.favoritesRepository.create({ cat_id: catId, user: { id: userId } });
    return this.favoritesRepository.save(favorite);
  }

  async removeFavorite(catId: string, userId: number): Promise<void> {
    await this.favoritesRepository.delete({ cat_id: catId, user: { id: userId } });
  }
}
