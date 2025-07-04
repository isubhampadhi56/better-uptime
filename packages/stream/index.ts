import { sleep } from "bun";
import { RedisStream } from "./utils/redis.stream";

const redis = RedisStream.getInstance();
sleep(1000000);