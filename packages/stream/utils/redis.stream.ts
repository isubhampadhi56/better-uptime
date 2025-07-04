import { Redis } from "ioredis";
import type { Stream } from "./baseClass";

export class RedisStream implements Stream{
    private static instance:RedisStream;
    private redisCluster:any;
    private redisEndpoints:any;
    private redisPassword:string;
    private constructor(){
        const redisHost = String(process.env.REDIS_HOSTS).split(',');
        this.redisEndpoints = [];
        redisHost.forEach(host => {
            const [hostname,port] = host.split(':');
            this.redisEndpoints.push({
                host: hostname,
                port: port,
            })
        })
        console.log(this.redisEndpoints);
        this.redisPassword = String(process.env.REDIS_PASSWORD)
        this.connect().then(() => {
            console.log("Connected to redis");  
        }).catch(err => {
            console.log(err);
        })
    }
    public static getInstance(){
        if(!RedisStream.instance){
            RedisStream.instance = new RedisStream();
        }
        return RedisStream.instance;
    }
    async connect(){
        this.redisCluster = new Redis.Cluster(this.redisEndpoints,
            {
                redisOptions:{
                    password: this.redisPassword
                }
            }
        );
    }
    async disconnect(){

    }
    async writeData(key:string,data:string){
        
    }
    async writeDataWithId(key:string,id:string,data:string){
        
    }
    async readData(key:string){
        return "";
    }
    async readDataWithId(key:string,id:string){
        return "";
    }
}