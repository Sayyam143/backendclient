import express from 'express';

import {
    getlawyer_category
} from '../controller/doctor_category.js';

const router = express.Router();

router.get("/:id",getlawyer_category);

export default router;