import {db} from '../db.js';

export const get_join_doctor = (req,res) => {
    const query = "select a.*,b.category_name from lawyer a,categories b where a.category_id=b.category_id";
    
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}