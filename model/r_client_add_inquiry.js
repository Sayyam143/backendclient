import express from 'express';

import{
    postInquiry
}from '../controller/client_add_inquiry.js';

const router = express.Router();

router.post("/",postInquiry);

export default router;