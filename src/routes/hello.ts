import { Request, Response, Router } from "express"
const hello = Router()

hello.get("/hello", (req: Request, res: Response) => {
    return res.json({ Page : "Hello" })
})

export default hello