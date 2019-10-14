export type Pocker = NormalCard[]

export enum Color {
    black = '♠',
    heart = '♥',
    diamon = '♦',
    meihau = '♣',
}
export type NormalCard = {
    color: Color,
    num: Num
}

export enum Num {
    A = 'A',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    JACK = 'J',
    QUEEN = 'Q',
    KEING = 'K'
}