import { useState, useEffect } from 'react';
import { getCats } from '../api/catApi';
import { Cat } from '../types/cat';

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCats().then(newCats => {
      setCats(prevCats => [...prevCats, ...newCats]);
      setLoading(false);
    });
  }, []);

  return { cats, setCats, loading };
};
