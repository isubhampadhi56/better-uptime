import request from "supertest"
import {app} from "../api/app"
import {describe, it,expect, beforeAll } from "bun:test"
import { clearDB, connectToDB, websiteRepo } from "db/client"

describe("Website gets created", () => {
    beforeAll(async ()=>{
        await connectToDB();
        await clearDB();
    })
    // it("Website not created if url is not present", async () => {
    //     const response = await request(app).post("/v1/website/").send({
    //         url: "abcd"
    //     }).expect(200);
    // })

    it("Website is created if url is present", async () => {
        const response = await request(app).post("/v1/website/").send({
            url: "https://google.com"
        }).expect(200);
        expect(response.body.id).not.toBeNull();
        expect(response.body.url).toBe("https://google.com");
        const website = await websiteRepo.findOne({where:{
            id: response.body.id
        }})
        expect(website).toBeDefined();
        expect(website?.url).toBe("https://google.com");
        expect(website?.timeAdded).not.toBeNull();
    })
});