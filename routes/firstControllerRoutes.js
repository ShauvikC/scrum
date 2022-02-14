import { Router } from "express";
import firstController from '../controllers/firstController.js';

const router = Router();

router.get('/',firstController.getData);

export default router;
