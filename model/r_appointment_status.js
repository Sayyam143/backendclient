import express from 'express';

import{
    getappointment_status
}from '../controller/appointment_status.js';

const router = express.Router();

router.get("/:id",getappointment_status);

export default router;