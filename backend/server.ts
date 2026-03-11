import express from 'express';
import type { Express } from 'express';
import { initDb } from './db/connection.js';
import routes from './routes/contacts.js'

const app: Express = express();
const port: string | number = (process.env.PORT) || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Contacts API is running. Use /contacts Please.');
});

app.use('/contacts', routes);


initDb((err: Error | null) => {
  if (err) {
    console.error('Error initializing database:', err);
    return;
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port ${port}`);
}
});