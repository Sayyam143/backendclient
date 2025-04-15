import express from 'express';

import {
    getcount_inquiry
}from '../controller/count_inquiry.js';

const router = express.Router();

router.get("/",getcount_inquiry);

export default router;