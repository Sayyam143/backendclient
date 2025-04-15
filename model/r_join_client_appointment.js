import express from "express";

import{
        getclientappointments
}from "../controller/join_client_appoitment.js";

const router=express.Router();

router.get("/",getclientappointments);

export default router;