import { Request, Response, Router } from "express"
import connection from ".././db/mongo";
const getAllPosts = Router()

getAllPosts.get("/getallposts", (req: Request, res: Response) => {
    connection.model("postSchema").find({}, (err:any, data:any) => {
        if (err) {
            return res.json({ error: 404 })
        }
        return res.json(data)
    }
    ).limit(100)
})

export default getAllPosts