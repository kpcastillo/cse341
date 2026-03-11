import type { Request, Response, NextFunction } from 'express';
import { getDb } from '../db/connection.js';
//import { ObjectId } from 'mongodb';

const getContactById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = getDb()?.collection('contacts').find({ _id: id });
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const result = getDb()?.collection('contacts').find();
  result?.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

export { getAll, getContactById };