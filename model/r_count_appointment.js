import express from 'express';

import{
    getcount_appointment
}from '../controller/count_appointment.js';

const router = express.Router();

router.get("/",getcount_appointment);

export default router;