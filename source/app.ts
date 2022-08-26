import express, { Express } from "express"
import { deckRouters } from "./routers/deck"
import config from "config"

const port: number = config.get("port")
const app: Express = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// routers
app.use("/api/deck", deckRouters.v1)

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
