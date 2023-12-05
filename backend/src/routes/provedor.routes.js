import { Router } from 'express';
import {getProvedores,
        getProvedor,
        createProvedor,
        updateProvedor, 
        deleteProvedor
        } 
        from '../controllers/provedor.controller.js';
        import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.get('/provedor',getProvedores);
router.get('/provedor/:id', getProvedor)
router.post('/provedor', createProvedor);
router.put('/provedor/:id', updateProvedor);
router.delete('/provedor/:id', deleteProvedor);

export default router;