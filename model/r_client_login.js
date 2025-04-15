import express from 'express';

import{
    postRagistration,
    getLogin
}from '../controller/client_login.js';

const router = express.Router();

router.post("/",postRagistration);
router.get("/",getLogin);

export default router;