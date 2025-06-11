import request from "supertest"
import {app} from "../../api/app"
import { clearDB, connectToDB, disconnectFromDB } from "db/client";
import {expect, beforeAll,afterAll } from "bun:test"
beforeAll(async () => {
  // Create a test database connection
  await connectToDB();
});

afterAll(async () => {
  await clearDB();
  await disconnectFromDB();
});
export async function login(username:string,password:string){
    const loginRes = await request(app).post("/v1/user/login/").send({
        username: username,
        password: password
    });
    expect(loginRes.status).toBe(200);
    return loginRes.body.jwtToken;
}


export async function createUser(username:string,password:string){
    const registerRes = await request(app).post("/v1/user/register/").send({
        username: username,
        password: password
    });
    expect(registerRes.status).toBe(200);
}