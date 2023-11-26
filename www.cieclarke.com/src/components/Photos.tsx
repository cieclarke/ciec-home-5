import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import * as flickr from '../lib/flickr';

export default function Photos(): React.JSX.Element {
  const [photos, setPhotos] = useState<Array<string>>([]);
  useEffect(() => {
    const fetch = async () => {
      const allPhotos = await flickr.getAllPhotos();
      setPhotos(allPhotos.map((p) => p.url));
    };
    fetch();
  }, []);

  return (
    <ImageList
      sx={{ width: '70rem', height: '100%' }}
      variant='masonry'
      cols={4}
      gap={1}
    >
      {photos.map((url) => (
        <ImageListItem key={url}>
          <img
            srcSet={`${url}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${url}?w=161&fit=crop&auto=format`}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
