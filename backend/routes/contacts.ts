import { Router } from 'express';
import { getName, getAll } from '../controllers/contacts.js';
const express = require('express');

const router = Router();

router.get('/', getAll);
router.get('/:name', getName);

export default router;