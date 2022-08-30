import "dotenv/config"
import express, { Express, Request, Response } from "express"

const app = express()
const port = process.env.NODE_ENV == "dev" ? 5000 : 3001
console.log(process.env)
app.get("/", (req: Request, res: Response) => {
    res.send({ nothing: "nothing" })
})
app.listen(port, () => {
    console.log(`Server running on port`)
})
