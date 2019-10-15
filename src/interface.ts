interface U {
    name: string,
    age: number,
    sayHello(msg: string): void
}

interface B extends U {
    look: string
}

class User<U> {
    name: 'ricardo'
    age: 18
} 

let u: U = {
    name: 'ricardo',
    age: 18,
    sayHello (msg) {
        console.log(msg)
    }
}

