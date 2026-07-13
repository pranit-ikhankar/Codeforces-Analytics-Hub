import express from 'express';
import path from 'path';
import getData from '../controller/userController.js';

const router = express.Router();

router.get('/:handle', getData);

export default router;