import { INR_balances } from "../data"
import  { Request, Response, Router } from "express"
export function usercreate(req:Request,res:Response):any{
    const {userId}=req.params
    console.log(userId)
    
    if(INR_balances[userId]){
        return res.send("already have an account")
    }
    
    INR_balances[userId]={
        balance:0,
        locked:0
    }
    
    console.log(INR_balances[userId])
    return res.json({INR_balances})
    }
