import {db} from '../db.js';

export const getlawyer_appointment = (req,res) => {
    const query = "SELECT a.name,b.category_name FROM `lawyer` a, categories b WHERE a.category_id=b.category_id and a.lawyer_id=?";

    db.query(query,req.params.id,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    })
}