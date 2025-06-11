import { z } from "zod";
import { websiteRepo } from "db/client";

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

export async function getWebsiteDetails(websiteReq:any,userId:string) {
    const website = await websiteRepo.findOne(
    { 
      where: {
        id: websiteReq.websiteId,
        userId: userId
      },
    });
    return website;
}