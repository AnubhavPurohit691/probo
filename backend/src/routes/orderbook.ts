import express, { Request, Response } from "express"
import { INR_balances, Orderbooks } from "../data"
const router =express.Router()

router.get("/",(req:Request,res:Response):any=>{
    res.json(Orderbooks)
})

// here may be cause some issue
router.post("/buy",(req:Request,res:Response):any=>{
    const{userId,symbol,quantity,price,stocktype}:{userId:string,symbol:string ,quantity:number,price:number,stocktype:string}=req.body // stock type is no
    const totalcost =quantity*price
    if(INR_balances[userId].balance<totalcost){
        res.json({message:"dont have money"})
    }

    if (!Orderbooks[symbol]) {
        Orderbooks[symbol] = {};
    }

    if (!Orderbooks[symbol][stocktype]) {
        Orderbooks[symbol][stocktype] = {};
    }

    if (!Orderbooks[symbol][stocktype][price]) {
        Orderbooks[symbol][stocktype][price] = {};
    }

    if (!Orderbooks[symbol][stocktype][price][quantity]) {
        Orderbooks[symbol][stocktype][price][quantity] = {};
    }

    // Now we assign the userId to the respective price and quantity
    Orderbooks[symbol][stocktype][price][quantity][userId] = {
        userId,
        quantity,
        price,
        stocktype
    }

    res.json(Orderbooks)
})

export default router