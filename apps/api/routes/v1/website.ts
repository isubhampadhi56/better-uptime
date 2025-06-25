import { Router } from "express"
import { addWebsite, getWebsiteDetails, getWebsiteList } from "../../module/website.module";
import { authMiddleware } from "../../middleware/auth.middleware";

export const router = Router();
router.use(authMiddleware)
router.post("/",async (req,res)=>{
    const addWebsiteResponse =  await addWebsite(req.body,(req as any).userData.userId);
    res.json(addWebsiteResponse);
    
});
router.get("/",async (req,res)=>{
    const websiteList = await getWebsiteList((req as any).userData.userId);
    res.json(websiteList);
})
router.get("/:websiteId",async(req,res)=>{
    const websiteId = req.params.websiteId;
    const websiteDetails = await getWebsiteDetails(websiteId,(req as any).userData.userId);
    res.json(websiteDetails);
})
