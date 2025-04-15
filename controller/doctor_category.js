import {db} from '../db.js';

export const getlawyer_category = (req,res) => {
    const query = "SELECT * FROM `lawyer` where category_id=?";

    db.query(query,req.params.id,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}