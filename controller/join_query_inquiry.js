import {db} from '../db.js';

export const get_join_inquiry = (req,res) => {
    const query = "SELECT a.*,b.name,c.client_name FROM inquiry a LEFT JOIN lawyer b ON a.lawyer_id = b.lawyer_id  LEFT JOIN client c ON a.client_id=c.client_id";
    
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

export const get_join_inquiry_doctor = (req,res) => {
    const query = "SELECT a.*,DATE_FORMAT(inquiry_date, '%d-%m-%Y') as inquiry_date,b.name,c.client_name FROM `inquiry` a,lawyer b,client c WHERE a.lawyer_id=b.lawyer_id AND a.client_id=c.client_id AND a.client_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}