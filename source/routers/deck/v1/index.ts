import { IRouter, Router, Request, Response } from "express"
import { getAShuffledDeck } from "../../../services/deck"
const deckRouterV1: IRouter = Router()

deckRouterV1.get("/v1/", (_req: Request, res: Response) => {
  const deck = getAShuffledDeck()
  return res.send(deck).status(200)
})

export { deckRouterV1 }
