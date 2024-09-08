import React from 'react';
import CatCard from '../cat_card';
import { Cat } from '../../types/cat';

const CatGrid = ({ cats, toggleFavorite }: { cats: Cat[], toggleFavorite: (id: string) => void }) => (
  <div className="cat-grid">
    {cats.map(cat => (
      <CatCard key={cat.id} cat={cat} toggleFavorite={toggleFavorite} />
    ))}
  </div>
);

export default CatGrid;
