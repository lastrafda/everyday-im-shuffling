import { IRouter, Router, Request, Response } from "express"
import { deckService } from "../../../services"
const deckRouterV1: IRouter = Router()

deckRouterV1.get("/", (_req: Request, res: Response) => {
  const deck = deckService.getShuffledDeck()
  return res.send(deck).status(200)
})

export { deckRouterV1 }
