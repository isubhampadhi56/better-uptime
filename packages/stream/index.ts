import { sleep } from "bun";
import { RedisStream } from "./utils/redis.stream";
export enum Stream{
    REDIS = "Redis"
}
export function getInstance(stream: Stream){
    switch(stream){
        case Stream.REDIS:
            return RedisStream.getInstance();
        default:
            throw Error("Not Implemented");
    }
}