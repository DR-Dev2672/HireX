import express from 'express';
import { login, register, logout } from '../controllers/user.controller.js';
const router=express.Router();

router.get('/login', login);
router.post('/register', register);
router.get('/logout',logout);
router.get('/',(req,res)=>{
res.json({
    message: "User route is working"})
})

export default router;