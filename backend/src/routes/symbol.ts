import express, { Request, Response } from "express"
import { Stock_balances } from "../data"
const router = express.Router()
router.post("/create/:stockSymbol",(req:Request,res:Response):any=>{
    const {symbol}=req.params
    const {userId}=req.body
    if(Stock_balances[userId]){
       return res.send('already exist')
    }
    Stock_balances[userId]={
        [symbol]:{
            yes:{
                quantity:1,
                locked:0
            }
        }
    }
    return res.json(Stock_balances)

})

export default router