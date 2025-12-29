import { Router } from "express";
import { sendMessage } from "../controllers/chatController.js";
import { createNewSession } from "../controllers/sessionController.js";
const router=Router();
router.post('/userMessage',sendMessage);
router.post('/session',createNewSession);
export default router