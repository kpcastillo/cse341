import { Router } from 'express';
import { getContactById, getAll, createContact, updateContact, deleteContact } from '../controllers/contacts.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getContactById);

//Post for creating a new contact, Put for updating 
router.post('/', createContact);
router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

export default router;