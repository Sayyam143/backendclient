import express from "express";

import{
    getlawyer_appointment
}from '../controller/doctor_join_appointment.js';

const router = express.Router();

router.get("/:id",getlawyer_appointment);

export default router;