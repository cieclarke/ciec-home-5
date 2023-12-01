const BASE_URL = 'http://api.ceiclarke.com';

export interface Photo {
  id: string;
  url: string;
}

export async function getPhotos(): Promise<Photo[]> {
  const x = await fetch(`${BASE_URL}/getAllPhotos`);
  return await x.json();
}
