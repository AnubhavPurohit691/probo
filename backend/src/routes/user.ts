import express, { Request, Response } from "express"
import { usercreate } from "../controllers/user"
const router = express.Router()

router.post("/create/:userId",usercreate)

export default router