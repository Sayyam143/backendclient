import {db} from '../db.js';

export const postInquiry = (req,res) => {
    const query = "INSERT INTO `inquiry`(`client_id`, `lawyer_id`, `inquiry_title`, `inquiry_date`, `message`, `status`, `entry_date`, `entry_by`) VALUES (?)"
    const date = new Date();
    const status = 1;
    const values = [
        req.body.client_id,
        req.body.lawyer_id,
        req.body.inquiry_title,
        date,
        req.body.message,
        status,
        date,
        req.body.entry_by
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Send Your Inquiry Successfully");
    })
}