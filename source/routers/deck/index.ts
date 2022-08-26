import { VersionedRouter } from "../../types"
import { deckRouterV1 } from "./v1"


const deckRouters: VersionedRouter  = {
    v1: deckRouterV1,
    // deckRoutersV2...
}

export { deckRouters }
