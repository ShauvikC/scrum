import { Router } from "express";
import firstController from '../controllers/firstController.js';

const router = Router();

router.get('/:id',firstController.getData);
router.post('/',firstController.setData);
router.put('/',firstController.putData);
router.delete('/',firstController.deleteData);


export default router;