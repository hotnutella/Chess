import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello back, ' + req.query.name + '!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye ' + req.query.name + '!');
});

app.get('/chess', (req, res) => {
  res.sendFile(__dirname + '/public/chess.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});