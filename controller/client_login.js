import {db} from '../db.js';

export const postRagistration = (req,res) => {
    const query = "INSERT INTO `client`(`client_name`, `mobile_no`, `email`, `password`, `status`, `entry_date`) VALUES (?)";
    const date = new Date();
    const status = 1;
    const values = [
        req.body.client_name,
        req.body.mobile_no,
        req.body.email,
        req.body.password,
        status,
        date
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Your Ragistration Successfully");
    })
}

export const getLogin = (req,res) => {
    const mobile_no = req.query.mobile_no;
    const password = req.query.password;

    const query = "SELECT * FROM `client` WHERE mobile_no='" + mobile_no + "' AND password='" + password + "'" ;

    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        else
        {
            if(data.length == 0)
            {
                return res.json(0);
            }
            else
            {                
                return res.json(data[0].client_id);
            }
        }
    })
}