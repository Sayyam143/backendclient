import express from 'express';

import{
    get_join_doctor
}from '../controller/join_query_doctor.js';

const router = express.Router();

router.get("/",get_join_doctor);

export default router;