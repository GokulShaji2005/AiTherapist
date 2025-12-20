import { Router } from "express";
import { sendMessage } from "../controllers/chatController.js";

const router=Router();
router.post('/userMessage',sendMessage);

export default router