import * as express from 'express';
import { getRelaxTracks, getSleepTracks, getFocusTracks } from './tracks';

const app = express();
const port = 3000;

app.use(express.static('assets'));

app.get('/tracks/relax', (_, res) => {
  const tracks = getRelaxTracks();
  res.json(tracks);
});

app.get('/tracks/sleep', (_, res) => {
  const tracks = getSleepTracks();
  res.json(tracks);
});

app.get('/tracks/focus', (_, res) => {
  const tracks = getFocusTracks();
  res.json(tracks);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
