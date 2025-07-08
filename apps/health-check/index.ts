import { getInstance, Stream } from "stream/client"
import { addToStream, checkStatus } from "./module/health-check.module";

async function main(){
    const readStream = String(process.env.WEBSITE_LIST_STREAM);
    const writeStream = String(process.env.HEARTBIT_STREAM)
    const group = String(process.env.GROUP)
    const consumerName = String(process.env.HOSTNAME)
    const redisClient = getInstance(Stream.REDIS);
    await redisClient.addConsumerGroup(readStream,group);
    const websiteList = await redisClient.readData(readStream,group,consumerName)
    const healthResponse = await checkStatus(websiteList);
    await Promise.all(healthResponse.map((healthResp)=>{
        addToStream(writeStream,readStream,group,healthResp);
    }));
}
main();
