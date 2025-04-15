import express from 'express';
import cors from 'cors';
import multer from 'multer';
import router1 from './model/r_category.js';
import router2 from './model/r_admin.js';
import router3 from './model/r_doctor.js';
import router4 from './model/r_replay_inquiry.js';
import router5 from './model/r_join_doctor.js';
import router6 from './model/r_join_inquiry.js';
import router7 from './model/r_login.js';
import router8 from './model/r_count_doctor.js';
import router9 from './model/r_count_category.js';
import router10 from './model/r_count_inquiry.js';
import router11 from './model/r_count_client.js';
import router12 from './model/r_count_appointment.js';
import router13 from './model/r_count_blog.js';
import router14 from './model/r_count_feedback.js';

import router15 from "./model/r_client.js";
import router16 from "./model/r_client_appointment.js";
import router17 from "./model/r_blog.js";
import router18 from "./model/r_contact.js";
import router19 from "./model/r_about.js";
import router20 from './model/r_join_blog.js';
import router21 from './model/r_join_client_appointment.js';
import router22 from './model/r_feedback.js';
import router23 from './model/r_doctor_category.js';
import router24 from './model/r_doctor_join_appointment.js';
import router25 from './model/r_client_login.js';
import router26 from './model/r_appointment_status.js';
import router27 from './model/r_client_add_inquiry.js';
import router28 from './model/r_client_change_password.js';
import router29 from './model/r_forget_password_client.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/backend/category",router1);
app.use("/backend/admin",router2);
app.use("/backend/lawyer",router3);
app.use("/backend/replay_inquiry",router4);
app.use("/backend/join_query_lawyer",router5);
app.use("/backend/join_query_inquiry",router6);
app.use("/backend/login",router7);
app.use("/backend/count_lawyer",router8);
app.use("/backend/count_category",router9);
app.use("/backend/count_inquiry",router10);
app.use("/backend/count_client",router11);
app.use("/backend/count_appointment",router12);
app.use("/backend/count_blog",router13);
app.use("/backend/count_feedback",router14);


app.use("/backend/client",router15);
app.use("/backend/client_appointment",router16);
app.use("/backend/blog",router17);
app.use("/backend/contact",router18);
app.use("/backend/about",router19);
app.use("/backend/join_blog",router20);
app.use("/backend/join_client_appointment",router21);

app.use("/backend/feedback",router22);
app.use("/backend/lawyer_category",router23);
app.use("/backend/lawyer_join_appointment",router24);
app.use("/backend/client_login",router25);
app.use("/backend/client_appointment_status",router26);
app.use("/backend/add_client_inquiry",router27);
app.use("/backend/change_password",router28);
app.use("/backend/forget_password",router29);


app.listen(8867,()=>{
    console.log("Backend Connected!");
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({storage});
  
  app.post("/backend/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });
