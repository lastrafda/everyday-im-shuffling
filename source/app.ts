import express, { Express } from "express"
import { deckRouters } from "./routers/deck"
import config from "config"
import pinoHttp from 'pino-http'

const port: number = config.get("port")
const app: Express = express()
const pino = pinoHttp()
app.use(pino)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// routers
app.use("/v1/decks", deckRouters.v1)

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
