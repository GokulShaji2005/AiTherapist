import { Router } from "express";
import { sessionWiseMsg } from "../db/messageDb.js";
import { userWiseMsg } from "../db/messageDb.js";
import { endSession } from "../services/sessionData.js";
import { summary } from "../db/messageDb.js";
const dbRouter=Router();
dbRouter.post('/sessionWiseMsg',sessionWiseMsg);
dbRouter.post('/userWiseMsg',userWiseMsg);
dbRouter.post('/endSession',endSession);
dbRouter.post('/summary',summary);
export default dbRouter