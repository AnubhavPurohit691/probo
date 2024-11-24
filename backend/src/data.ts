interface inrbalance {
    [userId:string]:{
        balance:number
        locked:number
    }
}

interface orderbooks{
    [symbol:string]:{
        yes:{
            [price:number]:{
                total:number
                orders:{
                    [userId:string]:number
                }
            }
        }
        no:{
            [price:number]:{
                total:number
                orders:{
                    [userId:string]:number
                }
            }
        }
    }
}

interface stockbalance{
    [userId:string]:{
        [symbol:string]:{
            yes?:{
                quantity:1
                locked:0
            }
            no?:{
                quantity:3
                locked:4
            }
        }
    }
}

export const INR_balances: inrbalance={}
export const Orderbooks:orderbooks={}
export const Stock_balances:stockbalance={}