
import type { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";
import type { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions.js";
import { DataSource } from "typeorm";
import { Website } from "./entities/website";
import { Region } from "./entities/region";
import { WebsiteTick } from "./entities/websiteTick";
import { User } from "./entities/user";
import "reflect-metadata";


const {
    DB_SERVER,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_LOGGING,
    DB_TYPE
} = process.env
const entities = [
    Website,
    Region,
    WebsiteTick,
    User
]
const postgresSqlConnectionOprtions: PostgresConnectionOptions = {
    type: "postgres",
    host: DB_SERVER,
    port: +DB_PORT!,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    logging: DB_LOGGING == "true",
    entities: entities,
}

const sqliteConnectionOption: SqliteConnectionOptions = {
    type: "sqlite",
    database: `${DB_NAME}.sqlite`,
    entities:entities,
    logging: DB_LOGGING == "true",
    synchronize: true,
}

export const sqlDatasource = new DataSource(
    DB_TYPE == "postgres"?postgresSqlConnectionOprtions:sqliteConnectionOption
) 

export async function connectToDB(){
    try{
        await sqlDatasource.initialize();
        console.log(`Connected to ${DB_TYPE} Datasource`)
        await sqlDatasource.synchronize();
    }catch(err){
        console.error(err);
    }
}

export async function clearDB(){
    try{
        await sqlDatasource.synchronize(true);
    }catch(err){
        console.error(err);
    }
}

export async function disconnectFromDB(){
    try{
        await sqlDatasource.destroy();
    }catch(err){
        console.error(err);
    }
}

export const websiteRepo = sqlDatasource.getRepository(Website);
export const regionRepo = sqlDatasource.getRepository(Region);
export const websiteTickRepo = sqlDatasource.getRepository(WebsiteTick);
export const userRepo = sqlDatasource.getRepository(User);
export { Website, WebsiteTick, Region, User };
