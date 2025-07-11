import { sleep } from "bun";
import { connectToDB, disconnectFromDB, websiteRepo } from "db/client";
import { getInstance, Stream } from "stream/client";

async function getWebsiteList(){
    
    const websiteList = await websiteRepo.find({});
    return websiteList;
}
async function addToStream(key: string,data:any){
    const redisStream  = getInstance(Stream.REDIS);
    await redisStream.writeData(key,data);
}
async function main(){
    const websites = await getWebsiteList();
    const streamName = String(process.env.WEBSITE_LIST_STREAM);
    const streamData =  websites.map((website)=>{
        return addToStream(streamName,JSON.stringify({
            id: website.id,
            url: website.url
        }))
    })
    await Promise.all(streamData);
}
await connectToDB();
const timer = parseInt(String(process.env.PRODUCER_INTERVAL));
setInterval(main,timer);