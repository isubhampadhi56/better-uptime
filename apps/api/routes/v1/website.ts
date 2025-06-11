import { Router } from "express"
import { addWebsite, getWebsiteList } from "../../module/website.module";

export const router = Router();
router.post("/",async (req,res)=>{
    console.log(req.body);
    try{
    const addWebsiteResponse =  await addWebsite(req.body,(req as any).userDetails.id);
    res.json(addWebsiteResponse);
    }catch(err){
        console.log(err);
    }
    
});
router.get("/",async (req,res)=>{
    try{
        const websiteDetails = await getWebsiteList((req as any).userDetails.id);
        res.json(websiteDetails);
    }catch(err){
        console.log(err);
    }
})
