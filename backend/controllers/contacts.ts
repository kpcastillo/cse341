const express = require('express');
import type { Request, Response, NextFunction } from 'express';
import { getDb } from '../db/connection.js';

const getName = async (req: Request, res: Response, next: NextFunction) => {
  const result = getDb()?.collection('contacts').find();
  result?.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]?.name);
  })
};
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const result = getDb()?.collection('contacts').find();
  result?.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

export { getAll, getName };