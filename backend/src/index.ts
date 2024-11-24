import express from "express"
const app = express()
import userrouter from "./routes/user"
import symbolcreate from "./routes/symbol"
import orderbook from "./routes/orderbook"
import balancerouter from './routes/balances'
import resetrouter from "./routes/reset"
app.use(express.json())
app.use("/user",userrouter)
app.use("/symbol",symbolcreate)
app.use("/orderbook",orderbook)
app.use("/balances",balancerouter)
app.use("/reset",resetrouter)

app.listen(8000,()=>console.log('server started'))