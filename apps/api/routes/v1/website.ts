import { Router } from "express"
import { addWebsite, getWebsiteList } from "../../module/website.module";
import { authMiddleware } from "../../middleware/auth.middleware";

export const router = Router();
router.use(authMiddleware)
router.post("/",async (req,res)=>{
    console.log(req.body);
    const addWebsiteResponse =  await addWebsite(req.body,(req as any).userData.userId);
    res.json(addWebsiteResponse);
    
});
router.get("/",async (req,res)=>{
    const websiteList = await getWebsiteList((req as any).userData.userId);
    res.json(websiteList);
})
