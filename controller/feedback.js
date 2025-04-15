import { db } from "../db.js";

export const getfeedbacks = (req,res) => {
    const query = "SELECT * FROM `feedback`";

    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

export const getfeedback = (req,res) => {
    const query = "SELECT * FROM `feedback` WHERE `feedback_id`=?";

    db.query(query,req.params.id,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

export const insertfeedback = (req,res) => {
    const query = "INSERT INTO `feedback`(`client_id`, `feedback_title`, `message`, `status`, `entry_date`, `entry_by`) VALUES (?)";
    const date = new Date();
    const values = [
        req.body.client_id,
        req.body.feedback_title,
        req.body.message,
        req.body.status,
        date,
        req.body.entry_by
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Send Your Feedback is successfully");
    })
}