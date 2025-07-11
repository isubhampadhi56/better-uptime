import { Cluster, Redis } from "ioredis";
import type { Stream } from "./baseClass";

export class RedisStream implements Stream{
    private static instance:RedisStream;
    private redisCluster:Cluster;
    private redisEndpoints:any;
    private redisPassword:string;
    private constructor(){
        const redisHost = String(process.env.REDIS_HOSTS).split(',');
        this.redisEndpoints = redisHost.map((host) => {
            const [hostname, port] = host.split(':');
            return { host: hostname, port: Number(port) };
        });
        this.redisPassword = String(process.env.REDIS_PASSWORD);
        console.log(this.redisEndpoints);
        this.redisCluster = this.connect();
    }
    public static getInstance(){
        if(!RedisStream.instance){
            RedisStream.instance = new RedisStream();
        }
        return RedisStream.instance;
    }
    connect(){
        try{
            const redisCluster = new Redis.Cluster(this.redisEndpoints,
                {
                    redisOptions:{
                        password: this.redisPassword,
                        connectTimeout: 3000,        // 10 s to connect
                        maxRetriesPerRequest: 3,      // fail after 3 retries
                        offlineQueue: false
                    },
                }
            );
            console.log("connected to redis cluster");
            return redisCluster;
        }catch(err){
            console.log(err);
            throw Error("Failed t connect to Cluster")
        }
    }
    async disconnect(){
        await this.redisCluster.quit();
    }
    async writeData(key:string,data:string){
        try{
            const id = await this.redisCluster.xadd(key,"*","data",data);
            console.log(`Written Data to Stream with ID - ${id}`);
        }catch(err){
            console.log(`Error writing to Stream ${err}`);
        }
    }
    async writeDataWithId(key:string,id:string,data:string){
        try{
            await this.redisCluster.xadd(key,id,"data",data);
        }catch(err){
            throw new Error(`Error while reading from stream ${err}`);
        }
    }
    async readData(key:string,groupName:string,consumerName:string,count:string){
        const result = await this.redisCluster.xreadgroup('GROUP',groupName,consumerName,'COUNT',parseInt(count),'STREAMS',key,'>');
        return result;
    }
    async readDataWithId(key:string,id:string){
        return "";
    }
    async addConsumerGroup(key:string,group:string){
        try {
            await this.redisCluster.xgroup('CREATE',key , group, '$', 'MKSTREAM');
            console.log('Consumer group created');
        } catch (err) {
            if ((err as Error).message.includes('BUSYGROUP')) {
            console.log('Consumer group already exists');
            } else {
            console.error('Error creating group:', err);
            }
        }
    }
    async ackowledgeMessage(key:string,groupName:string,messageId:[string]){
        await this.redisCluster.xack(key, groupName, ...messageId);
    }
}