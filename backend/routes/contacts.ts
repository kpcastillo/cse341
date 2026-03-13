import { Router } from 'express';
import { getContactById, getAll, createUser, updateUser, deleteUser } from '../controllers/contacts.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getContactById);

//Post for creating a new contact, Put for updating 
router.post('/', createUser);
router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;