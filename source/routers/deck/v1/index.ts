import { IRouter, Router, Request, Response } from "express"
import { deckService } from "../../../services"
const deckRouterV1: IRouter = Router()

deckRouterV1.get("/", (req: Request, res: Response) => {
  req.log.info("Generating a new deck")
  const deck = deckService.getShuffledDeck()
  return res.send(deck).status(200)
})

export { deckRouterV1 }
