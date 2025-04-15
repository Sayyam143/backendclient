import {db} from '../db.js';

export const getcount_blog = (req,res) => {
    const query = "SELECT COUNT(blog_id) AS blog_id FROM `blog`";

    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    })
}