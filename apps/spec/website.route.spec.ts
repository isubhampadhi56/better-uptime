import request from "supertest"
import {app} from "../api/app"
import {describe, it,expect, beforeAll } from "bun:test"
import { clearDB, connectToDB, websiteRepo } from "db/client"
import { createUser, login } from "./helpers/test.helper";

const username = "demo-user";
const password = "demo-password-123"
let authToken = "";
let authToken2 = "";
describe("/v1/website/ Endpoint", () => {
    beforeAll(async ()=>{
        await connectToDB();
        await clearDB();
        await createUser(username,password);
        await createUser(`${username}-2`,password);
        authToken = await login(username,password);
        authToken2 = await login(`${username}-2`,password);
    });
    describe("POST /v1/website/ Endpoint",()=>{
        it("Website not created if url is not present", async () => {
            const response = await request(app).post("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .send({
                url: "abcd"
            }).expect(400);
        })

        it("Website is created if url is present ", async () => {
            const response = await request(app).post("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .send({
                url: "https://google.com"
            }).expect(200);
            expect(response.body.id).not.toBeNull();
            expect(response.body.url).toBe("https://google.com");
            const website = await websiteRepo.findOne({where:{
                id: response.body.id
            }})
            expect(website).toBeDefined();
            expect(website?.url).toBe("https://google.com");
            expect(website?.createdAt).not.toBeNull();
        })
        it("Website should not be created if JWT Token don't present", async()=>{
            const response = await request(app).post("/v1/website/")
            .send({
                url: "https://google.com"
            }).expect(401);
            expect(response.body.error).toBe("INVALID_TOKEN");
        })
    })
    describe("GET /v1/website/ Endpoint",()=>{
        it("Should not able to get website created by differnt user", async () => {
            const response = await request(app).get("/v1/website/")
            .set("Authorization",`Bearer ${authToken2}`)
            .expect(200);
            expect(response.body).toBeDefined()
            expect(response.body.length).toBe(0);
        })

        it("Website is created if url is present ", async () => {
            await request(app).post("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .send({
                url: "https://facebook.com"
            }).expect(200);

            const response = await request(app).get("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .expect(200);
            expect(response.body).toBeDefined()
            expect(response.body.length).toBeGreaterThanOrEqual(1);
        })
        it("Sould not return Unauthorized if JWT Token don't present", async()=>{
            const response = await request(app).get("/v1/website/")
            .expect(401);
            expect(response.body.error).toBe("INVALID_TOKEN");
        })
    })
    describe("GET /v1/website/:websiteId Endpoint",()=>{
        it("Should not able to get website created by differnt user", async () => {
            const response = await request(app).post("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .send({
                url: "https://microsoft.com"
            }).expect(200);
            const websiteId = response.body.id;
            const response2 = await request(app).get(`/v1/website/${websiteId}`)
            .set("Authorization",`Bearer ${authToken2}`)
            .expect(200);
            expect(Object.keys(response2.body)).toHaveLength(0);
        })

        it("Should able to get website by websiteId ", async () => {
            const response = await request(app).post("/v1/website/")
            .set("Authorization",`Bearer ${authToken}`)
            .send({
                url: "https://youtube.com"
            }).expect(200);
            
            const websiteId = response.body.id;
            const response2 = await request(app).get(`/v1/website/${websiteId}`)
            .set("Authorization",`Bearer ${authToken}`)
            .expect(200);
            expect(response2.body).toBeDefined();
            expect(response2.body.id).toBe(websiteId);
            expect(response2.body.ticks).toBeDefined();
        })
        it("Sould not return Unauthorized if JWT Token don't present", async()=>{
            const response = await request(app).get(`/v1/website/c19ceccd-1fd8-45ce-bb51-f90e41062716`)
            .expect(401);
            expect(response.body.error).toBe("INVALID_TOKEN");
        })
    })
});