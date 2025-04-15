import express from 'express';
import { getLogin }from '../controller/login.js';

const router = express.Router();

router.get("/:id",getLogin);

export default router;