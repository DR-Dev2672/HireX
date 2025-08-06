import express from 'express';
import isAuthenticated  from '../middlewares/isAuthenticated.js';
import { login, register, logout,updateProfile } from '../controllers/user.controller.js';
const router=express.Router();

router.get('/login', login);
router.post('/register', register);
router.get('/logout',logout);
router.post("/profile/update",isAuthenticated,updateProfile);


export default router;