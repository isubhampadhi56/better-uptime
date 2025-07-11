import axios from "axios"
import { redis } from "bun";
import type { Website } from "db/client"
import { getInstance,Stream } from "stream/client";


export async function checkStatus(websites:any,regionId:string){
    if (!websites || !Array.isArray(websites)) return [];
    const result = await Promise.all(websites[0][1].map(async(website:any)=>{
        const websiteData = JSON.parse(website[1][1]);
        const redisId = website[0];
        const start = Date.now();
        try{
            const response = await axios.get(websiteData.url,{ timeout: 20000 });
            const end = Date.now();
            return{
                // messageId: redisId,
                websiteId: websiteData.id,
                // url:websiteData.url,
                regionId: regionId,
                response_time_ms: Math.round(end-start),
                status: response.status

            }
        }catch(err:any){
            const end = Date.now();
            return{
                // messageId: redisId,
                websiteId: websiteData.id,
                // url:websiteData.url,
                regionId: regionId,
                response_time_ms: Math.round(end-start),
                status: err?.response?.status ?? "000",

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