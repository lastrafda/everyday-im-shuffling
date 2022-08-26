import { Card as ICard, CardValue, Deck, Suit } from "../types"
import { Engine, nodeCrypto, Random } from "random-js"

/**
 * Card Factory
 */
const Card = (suit: Suit, value: CardValue): ICard => {
  return { suit, value }
}

/**
 *  Generates a brand new Deck 🃏
 */
const generateABrandNewDeck = (): Deck => {
  return Object.keys(Suit)
    .map((suit) =>
      Object.keys(CardValue).map((value) =>
        Card(
          Suit[suit as keyof typeof Suit],
          CardValue[value as keyof typeof CardValue]
        )
      )
    )
    .flat()
}

/**
 * Shuffles a deck (immutable)!
 */
const shuffleDeck = (engine: Engine, random: typeof Random) => {
  const randomWrapper = new random(engine)
  return (deck: Deck): Deck => {
    const newDeck = [...deck]
    // fisher-yates algorithm implementation
    for (let i = newDeck.length - 1; i >= 0; i--) {
      const pick = randomWrapper.integer(0, i)
      // swap without creating a temp variable using array destructuring
      ;[newDeck[pick], newDeck[i]] = [newDeck[i], newDeck[pick]]
    }
    return newDeck
  }
}

/**
 * Get a shuffled deck
 */
const getAShuffledDeck = () => {
  return shuffleDeck(nodeCrypto, Random)(generateABrandNewDeck())
}

export { Card, generateABrandNewDeck, shuffleDeck, getAShuffledDeck }
