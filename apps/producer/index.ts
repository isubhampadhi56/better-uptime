import { sleep } from "bun";
import { connectToDB, disconnectFromDB, websiteRepo } from "db/client";
import { getInstance, Stream } from "stream/client";

async function getWebsiteList(){
    await connectToDB()
    const websiteList = await websiteRepo.find({});
    await disconnectFromDB();
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
main();
setInterval(main,30000);