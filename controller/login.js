import { db } from "../db.js";

export const getLogin = (req,res) => {
   
    const query = "SELECT status FROM admin where mobile_no = ?";

    db.query(query,req.params.id,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    })
}