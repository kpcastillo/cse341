import { Router } from 'express';
import { getContactById, getAll } from '../controllers/contacts.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getContactById);

export default router;