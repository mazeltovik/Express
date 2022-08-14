import { Router } from "express";
import { getAll, createUser } from "../controllers/servers.js";
const router = Router();

router.get('/api/server',getAll)
router.post('/api/server',createUser)
export default router;