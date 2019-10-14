import { Pocker, Color, Num } from "./module"

function createPocker(): Pocker {
  let pocker: Pocker = [],
    num = Object.values(Num),
    color = Object.values(Color);

  num.forEach(n => {
    color.forEach(c => {
      pocker.push({
        color: c,
        num: n
      })
    })
  })
  return pocker;
}

function printPocker(pocker: Pocker) {
  pocker.forEach(card => {
    console.log(card.num + card.color)
  })
}

const pocker = createPocker()
printPocker(pocker)
