import { type Request, type Response, type NextFunction, response } from 'express';
import { getDb } from '../db/connection.js';
import { ObjectId } from 'mongodb';
import bodyParser from 'body-parser';

const getContactById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid id parameter' });
    return;
  }
  const result = getDb()?.collection('contacts').find({ _id: new ObjectId(id) });
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

const createContact = async (req: Request, res: Response, next: NextFunction) => {
  //const user = { firstName: req.body.firstName, 
     // lastName: req.body.lastName, 
      //email: req.body.email, 
      //favoriteColor:req.body.favoriteColor,
      //birthday: req.body.birthday };
    const body = req.body;
    const result = await getDb()?.collection('contacts').insertOne(body);
    if ((await result)?.acknowledged) {
      res.status(204).send();
    } else {
      res.status(500).json({ error: 'Sorry, an error happened while creating the contact.'});
    }
};

const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
    if (typeof id !== 'string') {
      res.status(400).json({ error: 'Invalid id' });
      return;
    }
    const user = { firstName: req.body.firstName, 
      lastName: req.body.lastName, 
      email: req.body.email, 
      favoriteColor:req.body.favoriteColor,
      birthday: req.body.birthday };
      const result = await getDb()?.collection('contacts').updateOne({ _id: new ObjectId(id) }, { $set: user });
      if ((await result)?.acknowledged) {
        res.status(204).send();
      } else {
        res.status(500).json({ error: 'Sorry, an error happened while updating the contact.'});
      }
};

const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid id parameter' });
    return;
  }
  const response = await getDb()?.collection('contacts').deleteOne({ _id: new ObjectId(id) });
  if (response?.deletedCount === 1) {
    res.status(204).send();
  } else {
    res.status(500).json({ error: 'Sorry, an error happened while deleting the contact.' });
  }
};

export { getAll, getContactById, createContact, updateContact, deleteContact };