import axios from "axios"
import { redis } from "bun";
import type { Website } from "db/client"
import { getInstance,Stream } from "stream/client";


export async function checkStatus(websites:any[]){
    const result = await Promise.allSettled(websites.map(async(website)=>{
        const start = Date.now();
        try{
            const response = await axios.get(website.url,{ timeout: 30000 });
            const end = Date.now();
            console.log(`Success ${website.url}`);
            return{
                messageId: website.id,
                websiteId: website.id,
                url:website.url,
                response_time_ms: Math.round(end-start),
                region: website.regionId,
                status: response.status

            }
        }catch(err:any){
            const end = Date.now();
            console.log(`Failed ${website.url}`);
            return{
                messageId: website.id,
                websiteId: website.id,
                url:website.url,
                response_time_ms: Math.round(end-start),
                region: website.regionId,
                status: err?.response?.status ?? null,

            }
        }
    }));
    return result;
}
export async function addToStream(writeSream: string,readStream:string,group:string,data:any){
    const redisStream  = getInstance(Stream.REDIS);
    await redisStream.writeData(writeSream,JSON.stringify(data));
    await redisStream.ackowledgeMessage(readStream,group,data.messageId)
    return `Message ID - ${data.messageId} Acknoledged`;
}