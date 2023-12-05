import { Router } from "express";
import {register,login,logout,profile,VerifyToken} from '../controllers/auth.controller.js'
import {authRequired} from '../middleware/validateToken.js'
import {validateSchema} from '../middleware/validator.middelware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schemas.js'

const router = Router();

router.get('/verify',VerifyToken)
router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get('/logout', logout);
router.get('/profile',authRequired, profile);

export default router;