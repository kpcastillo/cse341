const express = require('express');
import type { Request, Response } from 'express';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
interface WelcomeRequest extends Request {}
interface WelcomeResponse extends Response {}

const welcome = (req: WelcomeRequest, res: WelcomeResponse) => {
  res.send('Hello People');
}

//const getAll = (req: Request, res: Response) => {
  //res.send('Get all items');
//};

module.exports = { welcome };