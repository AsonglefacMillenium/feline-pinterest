const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=15';

export const getCats = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.map((cat: any) => ({ id: cat.id, url: cat.url }));
};
