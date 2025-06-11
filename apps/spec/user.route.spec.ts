import request from "supertest"
import {app} from "../api/app"
import {describe, it,expect, beforeAll, beforeEach } from "bun:test"
import { clearDB, websiteRepo } from "db/client"
import { login, createUser } from "./helpers/test.helper";

describe("User Authentication", () => {
    beforeEach(async () => {
        await clearDB();
    })
    const testUser = {
        username: "testuser_" + Math.random().toString(36).substring(2, 8),
        password: "TestPassword@1234"
    };

    it('should register user successfully', async () => {
        const res = await request(app)
            .post('/v1/user/register')
            .send(testUser);
        
        expect(res.status).toBe(200);
        expect(res.body.message).toContain('successfully');
    });

    it('should fail registration with invalid password', async () => {
        const res = await request(app)
            .post('/v1/user/register')
            .send({
                username: "testuser",
                password: "weak"
            });
        
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('VALIDATION_ERROR');
    });

    it('should fail registration with invalid username', async () => {
        const res = await request(app)
            .post('/v1/user/register')
            .send({
                username: "a", // Too short
                password: "Valid@123"
            });
        
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('VALIDATION_ERROR');
    });

    it('should login user successfully', async () => {
        // First create the user
        await createUser(testUser.username, testUser.password);
        
        const res = await request(app)
            .post('/v1/user/login')
            .send({
                username: testUser.username,
                password: testUser.password
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('jwtToken');
    });

    it('should fail login with invalid password', async () => {
        await createUser(testUser.username, testUser.password);
        
        const res = await request(app)
            .post('/v1/user/login')
            .send({
                username: testUser.username,
                password: "wrongpassword"
            });
        
        expect(res.status).toBe(401);
        expect(res.body.error).toBe('INVALID_USER_PASS');
    });

    it('should fail login with invalid username', async () => {
        const res = await request(app)
            .post('/v1/user/login')
            .send({
                username: "nonexistentuser",
                password: "anypassword"
            });
        
        expect(res.status).toBe(401);
        expect(res.body.error).toBe('INVALID_USER_PASS');
    });
});
