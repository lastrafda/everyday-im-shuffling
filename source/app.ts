import express, { Express, Request, Response } from "express"

import config from "config"
const port: number = config.get("port")
const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req: Request, res: Response) => {
  res.send(200)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
