import "dotenv/config"
import express, { Express, json, Request, Response } from "express"
import hello from "./routes/hello"
import getAllPosts from "./routes/getallposts"
import createPost from "./routes/createpost"
import vote from "./routes/vote"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.NODE_ENV == "dev" ? 5005 : 3005

app.get("/", (req: Request, res: Response) => {
    res.send({ nothing: "nothing" })
})
app.get("/hello", hello)
app.get("/getallposts", getAllPosts)
app.post("/createpost", createPost)
app.post("/vote", vote)

app.listen(port, () => {
    console.log(`Server running on port` + port)
})

