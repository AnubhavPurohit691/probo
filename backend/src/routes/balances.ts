import express, { Request, Response } from "express"
import { INR_balances, Stock_balances } from "../data"
const router = express.Router()

router.get("/inr",(req:Request,res:Response):any=>{
    res.json(INR_balances)
})
router.get("/inr/:userId",(req:Request,res:Response):any=>{
    const {userId}=req.params
    const userbalance = INR_balances[userId].balance
    res.json({balance :userbalance})
})

router.get("/stock",(req:Request,res:Response):any=>{
    res.json(Stock_balances)
})
router.get("/stock/:userId",(req:Request,res:Response):any=>{
    const {userId}=req.params
    const userstockbalance=Stock_balances[userId]
    res.json({userstockbalance:userstockbalance})
})

export default router