import express from "express"
const app = express()
import userrouter from "./routes/user"
app.use(express.json())
app.use("/user",userrouter)

app.listen(8000,()=>console.log('server started'))