import { getInstance, Stream } from "stream/client"
import { addToStream, checkStatus } from "./module/health-check.module";
import { connectToDB, disconnectFromDB, websiteTickRepo } from "db/client";

async function main(){
    await connectToDB();
    const readStream = String(process.env.WEBSITE_LIST_STREAM);
        const writeStream = String(process.env.HEARTBIT_STREAM)
        const group = "India"
        const regionId = String(process.env.REGION_ID)
        const consumerName = String(process.env.HOSTNAME)
        const redisClient = getInstance(Stream.REDIS);
        const batchSize = String(process.env.BATCH_SIZE);
    while(true){
        const websiteList:any = await redisClient.readData(readStream,group,consumerName,batchSize)
        const healthResponse = await checkStatus(websiteList,regionId);
        await websiteTickRepo.save(healthResponse);
    }
    await disconnectFromDB();
}
main();
