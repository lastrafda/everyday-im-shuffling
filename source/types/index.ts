import { IRouter } from "express"

export enum CardValue {
  Two = "two",
  Three = "three",
  Four = "four",
  Five = "five",
  Six = "six",
  Seven = "seven",
  Eight = "eight",
  Nine = "nine",
  Ten = "ten",
  Jack = "jack",
  Queen = "queen",
  King = "king",
  Ace = "ace",
}

export enum Suit {
  Hearts = "♥",
  Diamonds = "♦",
  Clubs = "♣",
  Spades = "♠",
}
export interface Card {
  value: CardValue
  suit: Suit
}

export type Deck = Array<Card>

// I think there was a way to have more specific (and powerful) types
// I read in a book about ddd and ts about this, I'll try to find it
export type RouterVersions = "v1" | "v2" | "v3" | "v4"

export type VersionedRouter = {
  [key: string]: IRouter
}
