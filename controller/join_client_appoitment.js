import {db} from "../db.js";

export const getclientappointments=(req,res)=>{
   const query="SELECT a.appointment_id,b.name,c.client_name,a.appointment_title,a.appointment_date,a.message,a.gender,a.case_category,a.client_image,a.case_date,CASE WHEN a.status=1 THEN 'Active' ELSE 'Inactive' END AS status FROM client_appointment a,lawyer b,client c where a.lawyer_id=b.lawyer_id AND a.client_id=c.client_id;";
    
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}