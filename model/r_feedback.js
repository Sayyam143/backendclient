import express from 'express';

import {
    getfeedbacks,
    getfeedback,
    insertfeedback
} from '../controller/feedback.js';

const router = express.Router();

router.get("/",getfeedbacks);
router.get("/:id",getfeedback);
router.post("/",insertfeedback);

export default router;
