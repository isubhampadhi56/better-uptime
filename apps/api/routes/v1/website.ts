import { Router } from "express"
import { addWebsite } from "../../module/website.module";

export const router = Router();
router.post("/",async (req,res)=>{
    console.log(req.body);
    try{
    const addWebsiteResponse =  await addWebsite(req.body);
    res.json(addWebsiteResponse);
    }catch(err){
        console.log(err);
    }
    
});
