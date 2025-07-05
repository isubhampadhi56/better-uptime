import { websiteRepo } from "db/client";
import { getInstance, Stream } from "stream/client";

async function getWebsiteList(){
    return await websiteRepo.find({});
}
async function addToStream(key: string,data:any){
    const redisStream  = getInstance(Stream.REDIS);
    await redisStream.writeData(key,data);
}
async function main(){
    const websites = await getWebsiteList();
    const streamData =  websites.map((website)=>{
        console.log(`processing website${website.id}`)
        return addToStream("betterup:websitelist",JSON.stringify(website))
    })
    await Promise.all(streamData);
}

setInterval(main,180000);