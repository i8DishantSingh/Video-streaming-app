import express from 'express';
import { signup, lognin, logout } from '../controllers/auth.controller.js';
    
const router = express.Router();

router.get('/signup', signup);
router.get('/login', lognin);
router.get('/logout', logout);


export default router;