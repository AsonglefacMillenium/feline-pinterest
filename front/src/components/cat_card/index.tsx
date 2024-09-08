import React from 'react';
import './CatCard.css';
import { Cat } from '../../types/cat';

const CatCard = ({ cat, toggleFavorite }: { cat: Cat, toggleFavorite: (id: string) => void }) => {
  const isFavorited = cat.isFavorited; // Assuming this is passed down
  return (
    <div className={`cat-card ${isFavorited ? 'favorited' : ''}`} onClick={() => toggleFavorite(cat.id)}>
      <img src={cat.url} alt="Cat" />
      {isFavorited && <span className="favorite-heart">❤️</span>}
    </div>
  );
};

export default CatCard;
