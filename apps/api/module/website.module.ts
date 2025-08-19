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
    const websiteList = await Promise.all(websites.map(async(website)=>{
      const [latestTick] = await websiteTickRepo.find({
        where: { website: { id: website.id } },
        order: { createdAt: "DESC" },
        take: 1,
      });
      return {
        ...website,
        status: latestTick?.status,
        updatedAt: latestTick?.createdAt,
        responseTime: latestTick?.response_time_ms
      }
    }))
    // console.log(await getAvgResponseTime(websiteList[0]!.id))
    return websiteList;
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
      where: { website: { id: websiteId } },
      order:{
        createdAt: "DESC",
      }
    })
    const responseTime = await getAvgResponseTime(websiteId);
    console.log(typeof(responseTime));
    return {
      ...website,
      status: ticks[0]?.status,
      updatedAt: ticks[0]?.createdAt,
      responseTime: responseTime?.split('.')[0],
      ticks
    };
}

export async function getAvgResponseTime(websiteId:string){
  const result = await websiteTickRepo
  .createQueryBuilder("tick")
  .select("AVG(tick.response_time_ms)", "avg")
  .getRawOne();
  return result?.avg;
}

export async function getUptime(websiteId:string){

}