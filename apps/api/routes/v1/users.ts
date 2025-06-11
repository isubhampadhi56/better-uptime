import { Router } from "express"
import { addUser, login } from "../../module/user.module";

export const router = Router();
router.post("/login",async (req,res)=>{
    const loginResponse = await login(req.body);
    res.json(loginResponse);
});
router.post("/register",async(req,res)=>{
    const registerResponse = await addUser(req.body);
    res.json(registerResponse);
})
