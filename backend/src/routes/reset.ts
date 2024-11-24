import express from "express"
import { INR_balances, Orderbooks, Stock_balances } from "../data"
const router = express.Router()

router.delete("/",(req,res)=>{
    Object.keys(Orderbooks).forEach((key)=>delete Orderbooks[key])
    Object.keys(Stock_balances).forEach((key)=>delete Stock_balances[key])
    Object.keys(INR_balances).forEach((key)=>delete INR_balances[key])
    res.json({message:"data reset"})
})

export default router