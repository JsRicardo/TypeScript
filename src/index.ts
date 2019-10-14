type Pocker = NormalCard[]
type Color = '♠' | '♥' | '♣' | '♦'
type NormalCard = {
  color: Color,
  Num: number
}

function createPocker(): Pocker {
  let pocker: Pocker = []
  for (let i = 1; i <= 13; i++) {
    pocker.push({
      Num: i,
      color: '♠'
    })
    pocker.push({
      Num: i,
      color: '♣'
    })
    pocker.push({
      Num: i,
      color: '♥'
    })
    pocker.push({
      Num: i,
      color: '♦'
    })
  }

  return pocker;
}

function printPocker(pocker: Pocker) {
  pocker.forEach(card => {
    console.log(card.Num + card.color)
  })
}

const pocker = createPocker()
printPocker(pocker)
