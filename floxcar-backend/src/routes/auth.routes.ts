// src/routes/auth.routes.ts
import { Router } from 'express';
import { login } from '../controllers/auth.controller'; // ✅ sans .js

const router = Router();

router.post('/login', login); // ✅ utilise "login", pas "loginController"

export default router;