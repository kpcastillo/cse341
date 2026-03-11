import type { Request, Response, NextFunction } from 'express';
import { getDb } from '../db/connection.js';

const getContactById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = getDb()?.collection('contacts').find({});
  result?.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]?._id);
  });
};
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const result = getDb()?.collection('contacts').find();
  result?.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    console.log('contacts found:', lists.length);
    res.status(200).json(lists);
  });
};

export { getAll, getContactById };