const express = require('express');
import type { Application } from 'express';
const routes = require('./backend/routes/index');

const app: Application = express();
const port: number = Number(process.env.PORT) || 8080;

//app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});