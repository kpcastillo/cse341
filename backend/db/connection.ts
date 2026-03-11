import dotenv from 'dotenv';
import {MongoClient, Db } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error("MONGODB_URI is missing in .env");
}

let _db: Db;

const initDb = (callback: (err: Error | null, db?: Db) => void) => {
  if (_db) {
    console.warn('DB is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGODB_URI as string)
  .then((client: MongoClient) => [
    _db = client.db(dbName),
    console.log('DB initialized successfully'),
    console.log('DB Name:', dbName),
    callback(null, _db)
  ])
  .catch((err: Error) => {
    callback(err);
  });
};

const getDb = (): Db | undefined => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

export { initDb, getDb };
