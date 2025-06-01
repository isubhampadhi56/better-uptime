import { Router } from "express"
import { addWebsite } from "../../module/website.module";
import { isEqualsGreaterThanToken } from "typescript";

export const router = Router();
router.post("/",async (req,res)=>{
    console.log(req.body);
    const addWebsiteResponse =  await addWebsite(req.body);
    res.json(addWebsiteResponse);
    
});
