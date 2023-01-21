import { Router } from 'express';
import { getContacts, getContact } from '../controllers/contactController.js';

const router = Router();

router.get('/', getContacts);

router.get('/:id', getContact);

export default router;
