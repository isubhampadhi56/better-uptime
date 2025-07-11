import { z } from "zod";
import { websiteRepo, WebsiteTick, websiteTickRepo } from "db/client";

const addWebsiteSchema = z.object({
  url: z.string().url()
});
export async function addWebsite(addWebsite:any,userId:string) {
    const addWebsiteReq = await addWebsiteSchema.parseAsync(addWebsite);
    const newWebsite = websiteRepo.create ({
        url: addWebsiteReq.url,
        user:{
          id: userId
        }
    });
    const website = await websiteRepo.save(newWebsite);
    return website;
}

export async function getWebsiteList(userId:string) {
    const websites = await websiteRepo.find(
    { 
      where: {
        userId: userId
      },
    });
    return websites;
}

export async function getWebsiteDetails(websiteId:string,userId:string) {
    const website = await websiteRepo.findOne(
    { 
      where: {
        id: websiteId,
        userId: userId
      },
    });
    if(!website){
      return {};
    }
    const ticks = await websiteTickRepo.find({
      where:{
        websiteId: websiteId
      },
      order:{
        createdAt: "DESC",
      }
    })
    return {...website,ticks};
}