import express from 'express';
import * as flickr from './flickr';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/albums', async (req, res) => {
  const albums = await flickr.getAlbums();
  res.send(albums);
});

app.get('/photos/:album', async (req, res) => {});

app.get('/img/:album/:photo', async (req, res) => {});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {});
