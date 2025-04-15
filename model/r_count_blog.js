import express from 'express';

import{
    getcount_blog
}from '../controller/count_blog.js';

const router = express.Router();

router.get("/",getcount_blog);

export default router;