import { db } from "../db.js";

export const getforget_password = (req,res) => {
    const email = req.query.email;

    const query = "SELECT * FROM `client` WHERE email='" + email + "'";

    try{
        db.query(query,(err,data)=>{
            if(err) return res.json(err);
            else
            {
                if(data.length == 0)
                    return res.json(0);
                else
                    return res.json(data[0].client_id);
            }
        })
    }
    catch(err){
        console.log(err);
    } 
}

// export const change_client_password = (req,res) => {
//     const query ="UPDATE `client` SET `password`=?,`update_date`=?,`entry_by`=? WHERE `client_id`=?";
//     const date = new Date();
//     const values = [
//         req.body.password,
//         date,
//         req.body.entry_by
//     ]
//     db.query(query,[...values,req.params.id],(err,data)=>{
//         if(err) return res.json(err);
//         return res.json("Change Your Password Successfully");
//     })

// }