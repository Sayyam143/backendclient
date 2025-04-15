import express from 'express';

import{
    getEmail,
    change_client_password
}from '../controller/client_change_password.js';

const router = express.Router();

router.get("/:id",getEmail);
router.put("/:id",change_client_password);

export default router;